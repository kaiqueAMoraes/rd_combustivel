import React, { Component } from 'react';
import axios from 'axios'

import './home.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import CardProd from "../../components/card-prod/card-prod.component";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from '../../components/carousel/carousel.component'
import ScrollCards from '../../components/scroll-cards/scroll-cards.component';
import Animations from "../../animations/animation_controller";

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],

            isLoginComponent: true,

            fade_controller: {
                none: "",
                opacity: 0
            },
        }
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/find-all-products")
            .then(response => {
                this.setState({ products: response.data })
            }).catch(error => {
                console.log(error)
            });

        this.setState({
            fade_controller: Animations.FADE_IN()
        })
    }

    handleAction = (whereTo) => {
        this.setState({
            fade_controller: Animations.FADE_IN()
        })
        return Animations.DELAY_CONTROLLER(
            () => {
                this.props.history.push(`${whereTo}`)
            },
            () => {
                this.setState({
                    fade_controller: Animations.FADE_OFF()
                })
            },
            1250
        )
    }

    render() {
        const { products } = this.state;
        const handleAction = this.handleAction;
        const MyComponents = { // cria componetização dinamica na pagina por um objeto, assim não é necessario criar callbacks no jsx
            Discount: function showDiscountItems() {
                return (
                    <Row className="justify-content-around">
                        <div className="discount-container">

                            <div onClick={() => handleAction("/home/categoria/gasolina-aditivada/")}>
                                <div className="discount" id="discount-a">
                                    <img src="https://cdn.dribbble.com/users/19849/screenshots/7619520/media/048f6df7e7c367f3e32e71c46cb912bb.png" alt="" />
                                    <h2>Gasolina</h2>

                                </div>
                            </div>

                            <div onClick={() => handleAction("/home/categoria/etanol-aditivado/")}>
                                <div className="discount" id="discount-b">
                                    <h2>Etanol</h2>
                                    <img src="https://cdn.dribbble.com/users/1568450/screenshots/7880617/media/2b89eb9a9496fba5dc1f7bf7d1418855.png" alt="" srcset="" />
                                </div>
                            </div>

                            <div onClick={() => handleAction("/home/categoria/diesel/")}>
                                <div className="discount" id="discount-c">
                                    <h2>óleo</h2>

                                    <img src="https://cdn.dribbble.com/users/1146489/screenshots/4337092/volkswagen-t1-dribbble-800-600.jpg" alt="" srcset="" />
                                </div>
                            </div>

                            <div onClick={() => handleAction("/home/categoria/gas-natural/")}>
                                <div className="discount" id="discount-d">
                                    <h2>fluidos</h2>
                                    <span>para motor</span>
                                    <img src="https://cdn.dribbble.com/users/13754/screenshots/6780635/gasoline-station.png" alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    </Row>
                )
            }
        }



        return (
            <div style={this.state.fade_controller} className="home-container-animation">

                <Container className="container-fluid" >
                    <Row>
                        <Carousel />
                    </Row>
                    {/* DISCOUNTS ===> TO CREATE COMPONENT */}
                    <MyComponents.Discount></MyComponents.Discount>
                    {/* DISCOUNTS ===> TO CREATE COMPONENT */}

                    <h2>Os mais vendidos</h2>
                    <ScrollCards
                        label={"Os mais vendidos"}
                        produtosApi={`http://localhost:8080/top-selling`}
                    />

                    <h2>Adicionados recentemente</h2>
                    <ScrollCards 
                        produtosApi={`http://localhost:8080/new-products`}
                        />

                    <h2>Outras ofertas</h2>
                    <ScrollCards 
                        produtosApi={`http://localhost:8080/find-all-products`}
                        />
                </Container>
            </div>
        )
    }
}

export default withRouter(Home);
