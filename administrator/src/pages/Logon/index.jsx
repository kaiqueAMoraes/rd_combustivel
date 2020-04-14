import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';


class Logon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email:"",
            password:""
        }
    }

    handleText = (evt) => {

        const { name, value } = evt.target;

        this.setState({ [name] : value });
    }

    handleSubmit = async (evt) => {

        evt.preventDefault();

        const { history } = this.props;
        const { email, password } = this.state;

        const Login = {
            "email": email,
            "password": password
        }

        try{
        await axios.post("http://localhost:8080/login", Login)
        .then(res =>{
            console.log(res);
            if(res.status === 200){
                sessionStorage.setItem("user", JSON.stringify(Login));
                history.push("/main");
            } else {
                throw new Error(res.data);
            }
        })
}catch (err){
    alert("ah não! macacos me mordam \n/" + err)
}
    }

    render() {
        return (
            <div>
                <div className="logon-container">
                    <section className="form">
                        <img src={logoImg} width="300" alt="Origin Combustíveis" />

                        <form onSubmit={this.handleSubmit}>
                            <h1>Login de Administrador</h1>

                            <input name="email" placeholder="Seu email" onChange={this.handleText}  value={this.state.email} />
                            <input name="password" type="password" placeholder="Sua Senha" onChange={this.handleText} value={this.state.password} />
                            <button className="button" type="submit">Entrar</button>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

export default withRouter(Logon);
