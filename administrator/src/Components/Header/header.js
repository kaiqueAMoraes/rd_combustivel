import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TiPowerOutline } from 'react-icons/ti';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Header() {
    const history = useHistory();

    function handleLogout(evt) {
        evt.preventDefault();

        history.push("/");
    }

    return (
        <div>
            <div className="header-container">
                <img src={logoImg} width="200" alt="Origin Combustíveis" />
                <Link className="link" to="/main">Dashboard</Link>
                <Link className="link" to="/pedidos">Pedidos</Link>
                <Link className="link" to="/cadastrar-produto">Cadastrar Produto</Link>
                <Link className="link" to="/clientes">Clientes</Link>
                <button onClick={handleLogout} type="button">
                    <TiPowerOutline size={40} color="#E02041" />
                </button>
            </div>
        </div>
    )
}
