import React from "react";
import { Link, withRouter, } from "react-router-dom";
import './header.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CartIcon from './cart-icon/cart-icon.component';
import CustomButton from '../../components/custom-button/custom-button.component';


import {
    Navbar, Container
} from 'reactstrap'


const handleSignOut = () => {
    let user = sessionStorage.getItem('user')
    user ? sessionStorage.clear() : sessionStorage.getItem('user');
    window.location.reload();
    console.log(sessionStorage.getItem('user'))
}

const Header = ({ history }) => {
    const currentUser = sessionStorage.getItem('user');

    {
        return (

            history.location.pathname === "/login" ||
                history.location.pathname === "/cadastro" ||
                history.location.pathname === "/dashboard" ||
                history.location.pathname === "/dashboard/novo-endereco" ||
                history.location.pathname === "/dashboard/edit-usuario" ? (

                    <Navbar className="bg-main navbar">
                        <Link to="/" className="logo"></Link>
                        {
                            history.location.pathname === "/dashboard" ? (
                                <div className="d-flex user-bag">
                                    <Link onClick={handleSignOut} className="navbar-span align-self-bottom get-exit" id="usuario-navbar">Sair</Link>
                                </div>
                            ) : (
                                    <div className="d-flex user-bag">
                                    </div>
                                )
                        }
                    </Navbar>
                ) : (
                    <>
                        <Navbar className="bg-main navbar">
                            <Link to="/" className="logo"></Link>
                            <div className="d-flex user-bag">
                                <div className="logged navbar-brand d-flex" id="user">
                                <CartIcon />
                                    {
                                        currentUser ? (
                                            <>
                                                <Link to="/dashboard"><FontAwesomeIcon icon={faUserCircle} className="icon-userCircle" /></Link>
                                                <div className="user-login d-flex flex-column bd-highlight mb-3 Row" id="div-header-separation">
                                                    <Link to="/dashboard" className="navbar-span user-name" id="ola-navbar" >Olá, {currentUser}</Link>
                                                    <Link to="/dashboard" className="navbar-span align-self-bottom" id="usuario-navbar">Minha conta</Link>
                                                </div>
                                            </>
                                        ) : (
                                                <>
                                                        <Link to="/login">
                                                        <CustomButton
                                                        className="login-button">
                                                            entre
                                                        </CustomButton>
                                                        </Link>
                                                        <span className="login-span">ou</span>
                                                        <Link to="/cadastro">
                                                        <CustomButton
                                                        className="signin-button">
                                                            cadastre-se
                                                        </CustomButton>
                                                        </Link>
                                                   
                                                </>
                                            )
                                    }
                                </div>
                            </div>
                        </Navbar>


                        <Navbar className="nav-menu sub-navbar navbar-expand-lg navbar-light">
                            <Container className="fluid ">
                                <ul className="navbar-nav d-flex none ">
                                    <li className="ml-4 nav-item mr-4 none">
                                        <Link className="nav-link" to={'/home/categoria/gasolina-aditivada/'}>Gasolina Adtivada</Link>
                                    </li>
                                    <li className="ml-4 nav-item mr-4 none">
                                        <Link className="nav-link" to={'/home/categoria/etanol-aditivado/'}>Etanol Adtivado</Link>
                                    </li>
                                    <li className="ml-4 nav-item mr-4 none" >
                                        <Link className="nav-link" to={'/home/categoria/Diesel/'}>Diesel</Link>
                                    </li>
                                    <li className="ml-4 nav-item mr-4 none">
                                        <Link className="nav-link" to={'/home/categoria/gas-natural/'}>Gás Natural</Link>
                                    </li>
                                    <li className="ml-4 nav-item mr-4 none">
                                        <Link className="nav-link" to={'/home/categoria/gas-natural/'}>Carros</Link>
                                    </li>
                                    <li className="ml-4 nav-item mr-4 none">
                                        <Link className="nav-link" to={'/home/categoria/gas-natural/'}>Motos</Link>
                                    </li>
                                    <li className="ml-4 nav-item mr-4 none">
                                        <Link className="nav-link" to={'/home/categoria/gas-natural/'}>Esportivos</Link>
                                    </li>
                                    <li className="ml-4 nav-item mr-4 none">
                                        <Link className="nav-link" to={'/home/categoria/gas-natural/'}>Lorem</Link>
                                    </li>
                                </ul>
                            </Container>
                        </Navbar>
                    </>
                )
        )
    }



}


export default withRouter(Header);
