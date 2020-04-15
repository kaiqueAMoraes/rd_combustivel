import React, { Component } from 'react'
import { Chart } from 'chart.js';
import './styles.css';

export default class LineGraph extends Component {

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                datasets: [
                    {
                        label: "Vendas",
                        data: [0, 45, 41, 55, 80, 57],
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
                            beginAtZero: true
                        }
                    }]
                }
            }
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
