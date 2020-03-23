import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import axios from 'axios';
//Link

//import CustomButton from '../../components/custom-button/custom-button.component';
//import CardsGrid from './cards-grid/cards-grid.component'

import './dashboard.styles.scss';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInfoCircle, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
//faUserCircle,
class DashboardPage extends Component {
    constructor(props) {
        super(props);
        const currentUser = sessionStorage.getItem('user');
        if (!currentUser)
            this.props.history.push('/');

        this.state = {
            user : {},
            email: sessionStorage.getItem('email'),
            produtos: []
        }

        //this.handleUserInformation = this.handleUserInformation.bind(this);
    }

    componentDidMount = () => {
        //console.log(this.state.email)
       const handleUserInformation = async () => {
            const {email}  = this.state;
            console.log(email)
            await axios.get('http://localhost:8080/find-user-email/' + email)
                .then( response => {
                        console.log(response)
                }).catch(error => {
                    console.log(error)
                });
        }
        handleUserInformation();
    }

    render() {
        return (

            <div className="dashboard-container">
                <Container className="inner-container">
                    <div className="user-container">
                        <div className="user-profile">

                            <div className="u-show" onClick={this.handleUserInformation}>
                                <div className="u-icon-holder"><FontAwesomeIcon icon={faInfoCircle} className="icon-userCircle" /></div>

                                <div className="u-text-container">
                                <h2 className="u-title">Minha conta</h2>
                                <span className="u-hello-user" >Olá, {sessionStorage.getItem('user')}</span>
                                </div>
                            </div>

                            <div className="u-show">
                                <div className="u-icon-holder"><FontAwesomeIcon icon={faShoppingBag} className="icon-userCircle" /></div>
                                <span className="u-title-one" >Minhas compras</span>                               
                            </div>

                        </div>
                    </div>

                    <div className="dashboard-content-holder">

                    </div>
                </Container>
            </div>
        )
    }
}

export default withRouter(DashboardPage);