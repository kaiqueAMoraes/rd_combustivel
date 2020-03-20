import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import CustomButton from '../../components/custom-button/custom-button.component';
import CardsGrid from './cards-grid/cards-grid.component'

import './dashboard.styles.scss';
import Container from 'react-bootstrap/Container'

class DashboardPage extends Component {
    constructor(props) {
        super(props);

        if (!sessionStorage.getItem('user'))
            this.props.history.push('/');

        this.state = {
            produtos: []
        }
    }

    render() {
        return (

            <div className="dashboard-container">
                <Container className="d-flex justify-content-between">
                    <div className="user-container">
                        <div className="user-profile">

                            <div className="u-show">
                                <h2>Minha conta</h2>
                                <span>{sessionStorage.getItem('user')}</span>
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