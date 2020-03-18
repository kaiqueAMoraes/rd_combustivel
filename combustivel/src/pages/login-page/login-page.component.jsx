import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


import FormInput from '../../components/form-input/form-input.componets';
import CustomButton from '../../components/custom-button/custom-button.component';

import FormGroup from 'react-bootstrap/FormGroup'
import Alert from 'react-bootstrap/Alert'
import './login-page.styles.scss';
import axios from "axios";

class LoginPage extends Component {
    constructor(props) {
        super(props)

        if (sessionStorage.getItem('user'))
            this.props.history.push('/');

        this.state = {
            email: "",
            password: "",
            user: "",
            errorMessage: ""
        }
    }

    clearMessage = () => {
        this.setState({ errorMessage: "" })
    }

    emptyInputErrorMessage = () => {
        this.setState({ errorMessage: "Os campos de email e senha estão vazios" })
    }

    credentialsErrorMessage = () => {
        this.setState({ errorMessage: "Email ou senha estão incorrentos" })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSignIn = async e => {
        e.preventDefault();

        const { email, password } = this.state;


        this.clearMessage();
        if (!email || !password) {
            this.emptyInputErrorMessage()
        } else {
            try {

                const { data: response } = await axios.get('http://localhost:8080/login', {
                    params: {
                      email: `${email}`
                    }
                  })

                if (response.password === password) {
                    this.props.history.push("/");
                    sessionStorage.setItem("user", JSON.stringify(response.name));
                    window.location.reload();
                }
                else
                    this.credentialsErrorMessage()
            } catch (err) {
                this.credentialsErrorMessage()
                    ;
            }
        }
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="sign-in">
                        <form method="get" onSubmit={this.handleSignIn}>
                            <FormGroup>
                                <div className="text-container" >
                                    <h2>Login do cliente</h2>
                                    <span className="span-signin" >Entre com email e senha</span>
                                </div>
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
                                    required />
                                <CustomButton
                                    type="submit"
                                    onClick={this.handleSignIn} >
                                    Continuar
                            </CustomButton>

                            </FormGroup>

                            <span>Não tem conta ? <Link to='/cadastro'>cadastre-se</Link></span>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);
