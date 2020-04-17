import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import FormInputDate from "../form-input-date/form-input-date.componets";
import FormInput, { FormInputMedium } from "../../components/form-input/form-input.componets";
import { successMessage, errorMessage } from "../../redux/message/message.actions";
import { setCurrentUser } from "../../redux/user/user.actions.js";
import CustomButton from '../../components/custom-button/custom-button.component';
import VALIDATE from "../../validations/root_val";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            passwordEval: "",
            CPF: "",
            firstName: "",
            lastName: "",
            birthdate: "",
            gender: "",
            phoneNumber: ""
        }
    }


    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSignIn = async () => {
        const { errorMessage, successMessage, setUser } = this.props;
        const { firstName, lastName, CPF, birthdate, phoneNumber, email, password, passwordEval, gender } = this.state;

        const errorArr = [];
        if (!VALIDATE._CPF(VALIDATE._ONLY_NUMBERS(CPF)))
            errorArr.push("CPF invalido");
        if (!VALIDATE._IS_EQUAL_PASSWORD(password, passwordEval))
            errorArr.push("Senhas precisam ser iguais!");
        if (errorArr.length > 0)
            return errorMessage(...errorArr);

        const _USER = {
            "firstName": firstName.toUpperCase(),
            "lastName": lastName.toUpperCase(),
            "cpf": VALIDATE._ONLY_NUMBERS(CPF),
            "phone": VALIDATE._ONLY_NUMBERS(phoneNumber),
            "birth": birthdate,
            "email": email,
            "password": password,
            "gender": gender
        }

        try {
            await axios.post("http://localhost:8080/create-user", _USER)
                .then(response => {
                    if (response.status === 200) {
                        return VALIDATE._DELAY_ACTION(
                            () => {
                                setUser(response.data)
                                
                                this.props.history.push("/")
                            },
                            () => {
                                successMessage("Usuario Cadastrado com sucesso")
                            },
                            3200
                        )
                    }
                    throw new Error(response.data);
                })
        }
        catch (err) {
            if (err) {
                errorMessage(JSON.stringify(err))
            }
        }
    }

    render() {
        const { errorMessage } = this.props;
        const { firstName, lastName, CPF, birthdate, phoneNumber, email, password, passwordEval } = this.state;
        return (
            <div>
                <FormInputMedium
                    name="firstName"
                    type="text"
                    value={firstName}
                    handleChange={this.handleChange}
                    label='Nome'
                    required />
                <FormInputMedium
                    name="lastName"
                    type="text"
                    value={lastName}
                    handleChange={this.handleChange}
                    label='Sobrenome'
                    required />
                <FormInputMedium
                    name="email"
                    type="email"
                    value={email}
                    handleChange={this.handleChange}
                    label='email'
                    required />

                <FormInputMedium
                    name="password"
                    type="password"
                    value={password}
                    handleChange={this.handleChange}
                    label='senha'
                    isPassword={true}
                    required />

                <FormInputMedium
                    name="passwordEval"
                    type="passwordEval"
                    value={passwordEval}
                    handleChange={this.handleChange}
                    label='senha'
                    isPassword={true}
                    required />

                <FormInputMedium
                    label="telefone"
                    mask="(99) 99999-9999"
                    name="phoneNumber"
                    type="text"
                    size="input-m"
                    value={phoneNumber}
                    handleChange={this.handleChange}
                    required />

                <FormInputMedium
                    name="CPF"
                    type="text"
                    label="CPF"
                    mask="999.999.999-99"
                    size="input-m"
                    value={CPF}
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

                <FormInputDate
                    label="data de nascimento"
                    name="birthdate"
                    type="date"
                    size="input-small"
                    value={birthdate}
                    handleChange={this.handleChange}
                    required />

                <div className="group-medium">
                    <div className="button-sign-position spaced-btn-sign-in-sign-up">


                        <CustomButton
                            handleClick={() => {
                                if (VALIDATE._IS_EMPTY([firstName, lastName, CPF, birthdate, phoneNumber, email, password])) {
                                    errorMessage("todos os campos precisam ser preenchidos")
                                }
                                else {
                                    { this.handleSignIn() }
                                }
                            }}
                            _class="create-button"
                        >
                            REALIZAR CADASTRO
                        </CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  currentUser : state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    successMessage: message => dispatch(successMessage(message)),
    errorMessage: message => dispatch(errorMessage(message)),
    setUser: user => dispatch(setCurrentUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))