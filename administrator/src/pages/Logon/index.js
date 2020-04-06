import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Logon() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(evt) {
        evt.preventDefault();

        history.push("/main");
    }

  return (
    <div>
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} width="300" alt="Origin Combustíveis"/>

                <form onSubmit={handleLogin}>
                    <h1>Login de Administrador</h1>

                    <input placeholder="Seu email" value={email} onChange={evt => setEmail(evt.target.value)}/>
                    <input type="password" placeholder="Sua Senha" value={password} onChange={evt => setPassword(evt.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                </form>
            </section>
        </div>
    </div>
  );
}
