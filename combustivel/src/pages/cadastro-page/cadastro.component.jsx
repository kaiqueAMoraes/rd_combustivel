import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';



import FormInput from './form-input/form-input.componets';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormGroup from 'react-bootstrap/FormGroup'
import Alert from 'react-bootstrap/Alert'

import BoxContainer from "../../components/box-container/box-container.component"

import './cadastro.styles.scss';

class CadastroPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "fullName": "",
            "firstName": "",
            "lastName": "",
            "CPF": "",
            "CPFValidation": "",
            "email": "",
            "password": "",
            "passwordValidation": "",
            "birth": "",
            "gender": "",
            "phone": "",
            "errorMessage": ""
        }
    }

    errorMessage = message => {
        this.setState({ errorMessage: `${message}` });
    }

    checkIfIsEmpty = () => {
        const { firstName, lastName, CPF, email, password, passwordValidation, birth, gender, phone } = this.state;

        const arr = [firstName, lastName, CPF, email, password, passwordValidation, birth, gender, phone];

        arr.forEach(elm => {
            if (elm === "") this.setState({ errorMessage: "todos os campos precisam ser preenchidos" })
        });
    }


    clearState = () => {
        this.setState({
            "email": "",
            "password": "",
            "firstName": "",
            "lastName": "",
            "CPF": "",
            "gender": "",
            "phone": "",
            "birth": ""
        })
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
        console.log(name + " : " + value)
    }

    handleNameChange = e => {
        const { name, value } = e.target;


        this.setState({ [name]: value },
            () => {
                var intNum = /^[0-9]+$/;
                if (!this.state.fullName.match(intNum)) {
                    this.setState({
                        fullName: this.state.fullName.replace(/[0-9]+/g, '')
                    })
                }
            })
    }

    handleCpfValidation = CPF => {

        let strCPF = CPF
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF === "00000000000") return false;

        for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
        return true
    };


    handleSubmit = async e => {
        e.preventDefault();

        let intNum = /^[0-9]+$/;
        const { fullName, CPF, email, password, passwordValidation, birth, gender, phone, errorMessage } = this.state;
        const arr = [fullName, CPF, email, password, passwordValidation, birth, gender, phone];


        arr.forEach(elm => {
            if (elm === "") this.errorMessage("todos os campos precisam ser preenchidos")
        });

        if (errorMessage === "") {
            if (password !== passwordValidation) this.errorMessage("as senhas precisam ser iguais")
            else {
                
                let arr = [];
                for (let i = 0; i < CPF.length; i++) {
                    if (CPF[i].match(intNum)) arr.push(CPF[i])
                }
                const cpf = arr.slice(",").join('');

                if (!this.handleCpfValidation(cpf)) this.setState({ CPFValidation: "CPF invalido" })
                else {
                    this.setState({ CPFValidation: "" })

                    const user = {
                        "email": email,
                        "password": password,
                        "firstName": fullName.split(" ").slice(0, 1).toString(),
                        "lastName": fullName.split(" ").slice(1).join(" "),
                        "CPF": cpf,
                        "gender": gender,
                        "phone": phone,
                        "birth": birth
                    }
                    console.log(user)

                    try {
                        await Axios.post("http://localhost:8080/ecommerce/client/", user);
                        this.clearState();
                        this.props.history.push("/login");
                    } catch (error) {
                        this.setState({ errorMessage: error.toString() })

                    }
            }
        }
    }
}


render() {
    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <BoxContainer >
                    <div className="text-container" >
                        <h1>Cadastre-se</h1>
                    </div>
                    <form method="get" onSubmit={this.handleSubmit}>


                        <FormGroup>

                            <FormInput
                                name="email"
                                type="email"
                                value={this.state.email}
                                handleChange={this.handleChange}
                                label='email'
                                required />

                            <FormInput name="password"
                                type="password"
                                value={this.state.password}
                                handleChange={this.handleChange}
                                label='senha'
                                size="input-small"
                                required />

                            <FormInput
                                name="passwordValidation"
                                type="password"
                                value={this.state.passwordValidation}
                                handleChange={this.handleChange}
                                label='repita a senha'
                                size="input-small"
                                required />

                            <FormInput
                                name="fullName"
                                type="text"
                                value={this.state.fullName}
                                handleChange={this.handleNameChange}
                                label='nome completo'
                                required />

                            {this.state.CPFValidation ? (<Alert className="m-4" variant='danger'>{this.state.CPFValidation}</Alert>) : ""}
                            <FormInput
                                name="CPF"
                                type="text"
                                label="digite seu CPF"
                                mask="999.999.999-99"
                                size="input-m"
                                value={this.state.CPF}
                                handleChange={this.handleChange}
                                required />


                            <div className="gender">
                                <div>
                                    <input
                                        id="f"
                                        name="gender"
                                        type="radio"
                                        value={"F"}
                                        onClick={this.handleChange}
                                        required />
                                    <label className="label-gender" htmlFor="f">feminino</label>
                                </div>

                                <div><input
                                    id="m"
                                    name="gender"
                                    type="radio"
                                    value={"M"}
                                    onClick={this.handleChange}
                                    required />
                                    <label className="label-gender" htmlFor="m">masculino</label></div>
                            </div>

                            {/* //TODO tratativa de ano de nascimento! */}
                            <FormInput
                                label="data de nascimento"
                                name="birth"
                                type="text"
                                mask="99/99/9999"
                                size="input-small"
                                value={this.state.birth}
                                handleChange={this.handleChange}
                                required />

                            <FormInput
                                label="telefone"
                                mask="(99) 99999-9999"
                                name="phone"
                                type="text"
                                size="input-m"
                                value={this.state.phone}
                                handleChange={this.handleChange}
                                required />


                            <CustomButton
                                type="submit"
                                onClick={this.handleSubmit} >
                                Continuar
                            </CustomButton>

                        </FormGroup>

                        <span>Já tem uma conta ? <Link to='/login'>faça login</Link></span>

                        {this.state.errorMessage ? (<Alert className="m-4" variant='danger'>{this.state.errorMessage}</Alert>) : ""}

                    </form>
                </BoxContainer>
            </div>
        </div>
    )
}
}



export default CadastroPage;