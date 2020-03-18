import React, { Component } from 'react';
import { Link } from 'react-router-dom';



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
            "email": "",
            "password": "",
            "passwordValidation": "",
            "birth": "",
            "gender": "",
            "phone": "",
            "errorMessage": ""
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                    <BoxContainer >
                        <div className="text-container" >
                            <h1>Cadastre-se</h1>
                        </div>
                        <form method="get" onSubmit={this.handleSignIn}>


                            <FormGroup>

                                {this.state.errorMessage ? (<Alert className="m-4" variant='danger'>{this.state.errorMessage}</Alert>) : ""}

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
                                    handleChange={this.handleChange}
                                    label='nome completo'
                                    required />

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
                                        handleChange={this.handleChange}
                                        required />
                                    <label htmlFor="f">feminino</label>
                                    </div>

                                    <div><input
                                        id="m"
                                        name="gender"
                                        type="radio"
                                        value={"M"}
                                        handleChange={this.handleChange}
                                        required />
                                    <label htmlFor="m">masculino</label></div>
                                </div>

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
                                    onClick={this.handleSignIn} >
                                    Continuar
                            </CustomButton>

                            </FormGroup>

                            <span>Já tem uma conta ? <Link to='/login'>faça login</Link></span>

                        </form>
                    </BoxContainer>
                </div>
            </div>
        )
    }
}



export default CadastroPage;