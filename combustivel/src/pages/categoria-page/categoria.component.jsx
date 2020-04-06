import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import CardProd from "../../components/card-prod/card-prod.component";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import './categoria.styless.scss';

export default class CategoriaPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produtos: []
        }
    }

    componentDidMount = async () => {
        const { history } = this.props;
        console.log(history.location.pathname)

        switch (history.location.pathname) {
            case '/home/categoria/gasolina-aditivada/':
                await axios.get("http://localhost:8080/find-product-category/1")
                    .then(response => {
                        this.setState({ produtos: response.data })
                    }).catch(error => {
                        console.log(error)
                    });
                break;
            case '/home/categoria/etanol-aditivado/':
                await axios.get("http://localhost:8080/find-product-category/2")
                    .then(response => {
                        this.setState({ produtos: response.data })
                    }).catch(error => {
                        console.log(error)
                    });
                break;
            case '/home/categoria/Diesel/':
                await axios.get("http://localhost:8080/find-product-category/3")
                    .then(response => {
                        this.setState({ produtos: response.data })
                    }).catch(error => {
                        console.log(error)
                    });
                break;
            case '/home/categoria/gas-natural/':
                await axios.get("http://localhost:8080/find-product-category/4")
                    .then(response => {
                        this.setState({ produtos: response.data })
                    }).catch(error => {
                        console.log(error)
                    });
                break;
            default:
                break;
        }
    }

    render() {
        const { produtos } = this.state;
        return (
            <Container className="categoria-container">
                {
                    produtos.map(elm => {
                        return <CardProd
                            className="test"
                            key={elm.idProduct}
                            idprod={elm.idProduct}
                            name={elm.name}
                            image={elm.image}
                            price={elm.price}
                            description={elm.description}
                        />
                    })
                }
            </Container>
        )
    }
}
