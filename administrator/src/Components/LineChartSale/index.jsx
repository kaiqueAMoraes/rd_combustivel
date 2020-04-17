import React, { Component } from 'react'
import { Chart } from 'chart.js';
import './styles.css';
import axios from 'axios';

export default class LineSales extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: [],
        }
    }


    chartRef = React.createRef();

    componentDidMount() {
        axios.get('http://localhost:8080/findall-orders')
            .then(response => {
                const orders = response.data;
                this.setState({ orders })

                const ORDERS_JANUARY = [];
                const ORDERS_FEBRUARY = [];
                const ORDERS_MARCH = [];
                const ORDERS_APRIL = [];
                const ORDERS_MAY = [];
                const ORDERS_JUNE = [];

                const JANUARY = new Date('2020-01-31 23:59:59');
                const FEBRUARY = new Date('2020-02-29 23:59:59');
                const MARCH = new Date('2020-03-31 23:59:59');
                const APRIL = new Date('2020-04-30 23:59:59');
                const MAY = new Date('2020-05-31 23:59:59');
                const JUNE = new Date('2020-06-30 23:59:59');

                this.state.orders.map(order => {
                    if(new Date(order.date) <= JANUARY){
                        ORDERS_JANUARY.push(order);
                    } else if (new Date(order.date) <= FEBRUARY){
                        ORDERS_FEBRUARY.push(order)
                    } else if (new Date(order.date) <= MARCH){
                        ORDERS_MARCH.push(order)
                    } else if (new Date(order.date) <= APRIL){
                        ORDERS_APRIL.push(order)
                    } else if (new Date(order.date) <= MAY){
                        ORDERS_MAY.push(order)
                    } else {
                        ORDERS_JUNE.push(order)
                    } 
                });

                const myChartRef = this.chartRef.current.getContext("2d");

                new Chart(myChartRef, {
                    type: "line",
                    data: {
                        //Bring in data
                        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                        datasets: [
                            {
                                label: "Vendas",
                                data: [ORDERS_JANUARY.length,
                                     ORDERS_FEBRUARY.length, 
                                     ORDERS_MARCH.length, 
                                     ORDERS_APRIL.length, 
                                     ORDERS_MAY.length, 
                                     ORDERS_JUNE.length],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)'
                                ]
                            }
                        ]
                    },
                    options: {
                        responsiveAnimationDuration: 5000,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 15,
                                    stepSize: 1
                                }
                            }]
                        }
                    }
                });
            });
    }

    render() {
        return (
            <div>
                <div className="main-container">
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            </div>
        )
    }
}
