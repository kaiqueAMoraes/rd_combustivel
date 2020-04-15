import React, { Component } from 'react'
import axios from 'axios';
import { Chart } from 'chart.js';
import './styles.css';

export default class DoughnutProducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            dataGraph: []
        }
    }

    chartRef = React.createRef();

    componentDidMount() {
        axios.get('http://localhost:8080/find-all-products')
            .then((response) => {
                const products = response.data;
                this.setState({ products })
                //console.log(products);

                const categories = [];
                this.state.products.map(product => (
                    categories.push(product.idCategory.name)
                ));
                //console.log(categories);

                const filteredCategories = categories.filter((este, i) => categories.indexOf(este) === i);
                //console.log(filteredCategories);

                const items = [];
                this.state.products.map(product => {
                    items.push(product.idCategory.idCategory)
                })
                //console.log(items);

                const filteredItems = items.filter((este, i) => items.indexOf(este) === i);
                //console.log(filteredItems);

                let occurrences = items.reduce(function(obj, item) {
                    obj[item] = (obj[item] || 0) + 1;
                    return obj;
                  }, {});

                //console.log(occurrences['1'] / items.length * 100);
                //console.log(occurrences['2'] / items.length * 100);
                //console.log(occurrences['3'] / items.length * 100);
                //console.log(occurrences['4'] / items.length * 100);

                const myChartRef = this.chartRef.current.getContext("2d");

                new Chart(myChartRef, {
                    type: "doughnut",
                    data: {
                        labels: [filteredCategories[0], filteredCategories[1], filteredCategories[2], filteredCategories[3]],
                        datasets: [{
                            label: 'Categorias',
                            data: [(occurrences['1'] / items.length * 100),
                             (occurrences['2'] / items.length * 100), 
                             (occurrences['3'] / items.length * 100), 
                             (occurrences['4'] / items.length * 100)],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 2,     
                        }]
                    },
                    options: {
                        responsiveAnimationDuration: 5000,
                        cutoutPercentage: 50,
                        animation: {
                            animateRotate: true,
                            duration: 2000,
                            animateScale: true
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                        },

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
