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
    window.location.reload();
    console.log(sessionStorage.getItem('user'))
}

const Header = ({ history }) => {
    const currentUser = sessionStorage.getItem('user');

    {
        return history.location.pathname === "/login" || 
            history.location.pathname === "/cadastro" || 
            history.location.pathname === "/dashboard" ? (

            <Navbar className="bg-main navbar">
                <Link to="/" className="logo"></Link>
                <div className="d-flex user-bag">
                </div>
            </Navbar>
        ) : (
                <>
                    <Navbar className="bg-main navbar">
                        <Link to="/" className="logo"></Link>
                        <div className="d-flex user-bag">
                        <CartIcon />

                            <div className="logged navbar-brand d-flex" id="user">
                                {
                                    currentUser ? (
                                        <>
                                        <Link to="/dashboard"><FontAwesomeIcon icon={faUserCircle} className="icon-userCircle" /></Link>
                                        <div className="user-login d-flex flex-column bd-highlight mb-3 Row" id="div-header-separation">
                                            <Link to="/dashboard" className="navbar-span" id="ola-navbar" >Olá, {currentUser}</Link>
                                            <Link onClick={handleSignOut} className="navbar-span align-self-bottom" id="usuario-navbar">Sair?</Link>
                                        </div>
                                        </>
                                    ) : (
                                        <>   
                                        <Link to="/login"><FontAwesomeIcon icon={faUserCircle} className="icon-userCircle" /></Link>
                                            <div className="user-login d-flex flex-column bd-highlight mb-3 Row" id="div-header-separation">
                                                <Link to="/login" className="navbar-span" id="ola-navbar">Olá, faça seu login </Link>
                                                <Link to="/cadastro" className="navbar-span align-self-bottom" id="usuario-navbar"> ou Cadastre-se</Link>
                                            </div>
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
                            </ul>
                        </Container>
                    </Navbar>
                </>
            )
    }



}


export default withRouter(Header);
