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
                                    <img src="https://http2.mlstatic.com/yamaha-fz25-abs-blueflex-2020-2020-0-km-D_NQ_NP_833124-MLB32002026521_082019-F.webp" alt="" />
                                    <h2>Até 40% off</h2>
                                    <span>Em gasolina para moto</span>
                                </div>
                            </Link>

                            <Link to="/home/categoria/etanol-aditivado/">
                                <div className="discount" id="discount-b">
                                    <h2>Até 35% off</h2>
                                    <span>para os aventureiros</span>
                                    <img src="https://toro.fiat.com.br/content/dam/fiat/products/226/11a/0/2020/page/360/176/29.jpg" alt="" srcset="" />
                                </div>
                            </Link>

                            <Link to="/home/categoria/diesel/">
                                <div className="discount" id="discount-c">
                                    <h2>Até 40% off</h2>
                                    <span>nos esportivos</span>
                                    <img src="https://www.motorsportmaranello.com.br/wp-content/uploads//2019/12/test-drive-noleggio-Lamborghini-Hur%C3%A0can-2.jpg" alt="" srcset="" />
                                </div>
                            </Link>

                            <Link to="/home/categoria/gas-natural/">
                                <div className="discount" id="discount-d">
                                    <h2>25% off</h2>
                                    <span>escolhido a dedo</span>
                                    <img src="https://media.gazetadopovo.com.br/2018/08/a166e0e4b01fdced4a49ac7635f45394-gpMedium.jpg" alt="" srcset="" />
                                </div>
                            </Link>
                        </div>
                    </Row>
                )
            }
        }



        return (
            <>
                
                <Carousel/>
                <Container className="container-fluid">
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
