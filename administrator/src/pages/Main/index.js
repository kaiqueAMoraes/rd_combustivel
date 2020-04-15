import React, { Component } from 'react';
import axios from 'axios';

import LineChart from '../../Components/LineChart/index';
import DoughnutProduct from '../../Components/DoughnutChartProduct/index';
import Header from '../../Components/Header/header';

import './styles.css';

export default class Main extends Component {

    render() {

        return (
        <>
        <Header />
        <div className="App">
            <div className="main chart-wrapper">
            <LineChart
                data=""
                title="Vendas"
                color="#3E517A"
            />
            </div>
            {/* <div className="sub chart-wrapper">
            <LineChart
                data=""
                title="Clientes"
                color="#70CAD1" 
            />
            </div> */}
            <div className="sub chart-wrapper">
            <DoughnutProduct
                data=""
                title=""
                colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
            />
            </div>
        </div>
        </>
        )
    }
}

