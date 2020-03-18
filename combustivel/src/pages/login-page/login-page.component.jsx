import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import FormInput from '../../components/form-input/form-input.componets';
import CustomButton from '../../components/custom-button/custom-button.component';

import FormGroup from 'react-bootstrap/FormGroup'
import './login-page.styles.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name] : value })
    }

    handleSignIn = e => {
        e.preventDefault();
        console.log(e);
    }

    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="sign-in">
                        <form method="get">
                        <FormGroup>
                        <div className="text-container" >
                            <h2>Login do cliente</h2>
                            <span className="span-signin" >Entre com email e senha</span>
                        </div>
                        <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required />
                        <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='senha'required />
                        <CustomButton onClick={this.handleSignIn} >Continuar</CustomButton>
                        </FormGroup>
                        <span>Não tem conta ? <Link to='/cadastro'>cadastre-se</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
