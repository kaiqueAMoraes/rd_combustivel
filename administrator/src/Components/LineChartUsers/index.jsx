import React, { Component } from 'react'
import { Chart } from 'chart.js';
import './styles.css';
import axios from 'axios';

export default class LineUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }


    chartRef = React.createRef();

    componentDidMount() {
        axios.get('http://localhost:8080/find-users')
            .then(response => {
                const users = response.data;
                this.setState({ users })

                const JANUARY = new Date('2020-01-31 23:59:59');
                const FEBRUARY = new Date('2020-02-29 23:59:59');
                const MARCH = new Date('2020-03-31 23:59:59');
                const APRIL = new Date('2020-04-30 23:59:59');
                const MAY = new Date('2020-05-31 23:59:59');
                const JUNE = new Date('2020-06-30 23:59:59');

                const USERS_JANUARY = [];
                const USERS_FEBRUARY = [];
                const USERS_MARCH = [];
                const USERS_APRIL = [];
                const USERS_MAY = [];
                const USERS_JUNE = [];

                
                this.state.users.map(order => {
                    if(new Date(order.date) <= JANUARY){
                        USERS_JANUARY.push(order);
                    } else if (new Date(order.date) <= FEBRUARY){
                        USERS_FEBRUARY.push(order)
                    } else if (new Date(order.date) <= MARCH){
                        USERS_MARCH.push(order)
                    } else if (new Date(order.date) <= APRIL){
                        USERS_APRIL.push(order)
                    } else if (new Date(order.date) <= MAY){
                        USERS_MAY.push(order)
                    } else {
                        USERS_JUNE.push(order)
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
                                label: "Cadasto de Novos Usuários",
                                data: [USERS_JANUARY.length,
                                     USERS_FEBRUARY.length, 
                                     USERS_MARCH.length, 
                                     USERS_APRIL.length, 
                                     USERS_MAY.length, 
                                     USERS_JUNE.length],
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
                                    stepSize: 50
                                },
                                display: true
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
