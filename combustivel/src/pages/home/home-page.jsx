import React, { Component } from 'react';
import axios from 'axios'

import './home.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import CardProd from "../../components/card-prod/card-prod.component";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from '../../components/carousel/carousel.component'
import ScrollCards from '../../components/scroll-cards/scroll-cards.component';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/find-all-products")
            .then(response => {
                this.setState({ products: response.data })
            }).catch(error => {
                console.log(error)
            });
    }


    render() {
        const { products } = this.state;

        const MyComponents = { // cria componetização dinamica na pagina por um objeto, assim não é necessario criar callbacks no jsx
            Discount: function showDiscountItems() {
                return (
                    <Row className="justify-content-around">
                        <div className="discount-container">

                            <Link to="/home/categoria/gasolina-aditivada/">
                                <div className="discount" id="discount-a">
                                    <img src="https://cdn.dribbble.com/users/19849/screenshots/7619520/media/048f6df7e7c367f3e32e71c46cb912bb.png" alt="" />
                                    <h2>Gasolina</h2>
                                    
                                </div>
                            </Link>

                            <Link to="/home/categoria/etanol-aditivado/">
                                <div className="discount" id="discount-b">
                                    <h2>Etanol</h2>
                                    <img src="https://cdn.dribbble.com/users/1568450/screenshots/7880617/media/2b89eb9a9496fba5dc1f7bf7d1418855.png" alt="" srcset="" />
                                </div>
                            </Link>

                            <Link to="/home/categoria/diesel/">
                                <div className="discount" id="discount-c">
                                    <h2>óleo</h2>

                                    <img src="https://cdn.dribbble.com/users/1146489/screenshots/4337092/volkswagen-t1-dribbble-800-600.jpg" alt="" srcset="" />
                                </div>
                            </Link>

                            <Link to="/home/categoria/gas-natural/">
                                <div className="discount" id="discount-d">
                                    <h2>fluidos</h2>
                                    <span>para motor</span>
                                    <img src="https://cdn.dribbble.com/users/13754/screenshots/6780635/gasoline-station.png" alt="" srcset="" />
                                </div>
                            </Link>
                        </div>
                    </Row>
                )
            }
        }



        return (
            <>
                
                <Container className="container-fluid">
                <Row>
                <Carousel/>
                </Row>
                    {/* DISCOUNTS ===> TO CREATE COMPONENT */}
                    <MyComponents.Discount></MyComponents.Discount>
                    {/* DISCOUNTS ===> TO CREATE COMPONENT */}

                    <h2>Os mais vendidos</h2>
                    <ScrollCards
                        label={"Os mais vendidos"}
                        produtos={`http://localhost:8080/find-all-products`}
                    />

                    <h2>Adicionados recentemente</h2>
                    <ScrollCards/>
                    
                    <h2>Outras ofertas</h2>
                    <ScrollCards/>
                </Container>
            </>
        )
    }
}

export default withRouter(Home);
