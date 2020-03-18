import React from "react";
import { Link, withRouter } from "react-router-dom";
import './header.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import CartIcon from './cart-icon/cart-icon.component';

import {
    Navbar, Container
} from 'reactstrap'


const handleSignOut = () => {
    let user = sessionStorage.getItem('user')
    user ? sessionStorage.clear() : sessionStorage.getItem('user');
    console.log(sessionStorage.getItem('user'))
}

const Header = ({ history }) => {
    const currentUser = sessionStorage.getItem('user');


    {
        return history.location.pathname === "/login" || history.location.pathname === "/cadastro" ? (

            <Navbar className="bg-main navbar">
                <Link to="/" className="logo"></Link>
                <div className="d-flex user-bag">
                    <div className="for-login-page"></div>
                </div>
            </Navbar>

        ) : (
                <>
                    <Navbar className="bg-main navbar">
                        <Link to="/" className="logo"></Link>
                        <div className="d-flex user-bag">
                            <Link to="/login" className="logged navbar-brand d-flex" id="user">
                                <FontAwesomeIcon icon={faUserCircle} className="icon-userCircle" />
                                {
                                    currentUser ? (
                                        <div className="user-login d-flex flex-column bd-highlight mb-3 Row" id="div-header-separation">
                                            <h3 className="navbar-span" id="ola-navbar" >Olá, {currentUser}</h3>
                                            <Link onClick={handleSignOut} className="navbar-span align-self-bottom" id="usuario-navbar">Sair?</Link>
                                        </div>

                                    ) : (
                                            <div className="user-login d-flex flex-column bd-highlight mb-3 Row" id="div-header-separation">
                                                <Link to="/login" className="navbar-span" id="ola-navbar">Olá, faça seu login </Link>
                                                <Link to="/cadastro" className="navbar-span align-self-bottom" id="usuario-navbar"> ou Cadastre-se</Link>
                                            </div>
                                        )
                                }
                            </Link>
                            <CartIcon />

                        </div>
                    </Navbar>
                    <Navbar className="nav-menu sub-navbar navbar-expand-lg navbar-light">
                        <Container className="fluid">
                            <ul className="navbar-nav">
                                <li className="ml-4 nav-item mr-4">
                                    <Link className="nav-link" to={'/home/categoria/gasolina-aditivada/'}>Gasolina Adtivada</Link>
                                </li>
                                <li className="ml-4 nav-item mr-4">
                                    <Link className="nav-link" to={'/home/categoria/etanol-aditivado/'}>Etanol Adtivado</Link>
                                </li>
                                <li className="ml-4 nav-item mr-4">
                                    <Link className="nav-link" to={'/home/categoria/Diesel/'}>Diesel</Link>
                                </li>
                                <li className="ml-4 nav-item mr-4">
                                    <Link className="nav-link" to={'/home/categoria/gas-natural/'}>Gás Natural</Link>
                                </li>
                            </ul>
                        </Container>
                    </Navbar>
                </>
            )
    }



}


export default withRouter(Header);
