import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import CustomButton from '../../components/custom-button/custom-button.component';
import CardsGrid from './cards-grid/cards-grid.component'

import './dashboard.styles.scss';
import Container from 'react-bootstrap/Container'

class DashboardPage extends Component {
    constructor(props){
        super(props);

        if (sessionStorage.getItem('user'))
            this.props.history.push('/');

        this.state = {
            produtos : []
        }
    }

  render() {
    return  (
        <div className="dashboard-container">
            <div className="user-profile"></div>

        <Container className="d-flex justify-content-between"> 
            <div className="dashboard-content-holder">
        
                <CardsGrid api={'https://jsonplaceholder.typicode.com/users'}  itemsQtd={5}/>
            </div> 
        </Container>
        </div>
    )
  }
}

export default withRouter(DashboardPage);