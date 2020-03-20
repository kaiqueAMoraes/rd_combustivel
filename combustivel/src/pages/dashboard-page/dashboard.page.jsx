import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import CustomButton from '../../components/custom-button/custom-button.component';
import CardsGrid from './cards-grid/cards-grid.component'

import './dashboard.styles.scss';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faInfoCircle, faShoppingBag} from '@fortawesome/free-solid-svg-icons'

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
    }

    handleUserInformation = async () => {
        const {email}  = this.state;
        await axios.get("http://localhost:8080/find-user-email/", email)
        .then(response => this.setState({user : response}))
    }

    render() {
        return (

            <div className="dashboard-container">
                <Container className="d-flex justify-content-between">
                    <div className="user-container">
                        <div className="user-profile">

                            <div className="u-show" onClick={this.handleUserInformation}>
                                <div className="u-icon-holder"><FontAwesomeIcon icon={faInfoCircle} className="icon-userCircle" /></div>

                                <div className="u-text-container">
                                <h2 class="u-title">Minha conta</h2>
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