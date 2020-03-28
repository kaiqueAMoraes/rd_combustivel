import React, { Component } from 'react';
import axios from 'axios'

import './home.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import CardProd from "../../components/card-prod/card-prod.component";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            left: 100
        }
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/find-all-products")
            .then(response => {
                console.log(response.data[0].idProduct)
                this.setState({ products: response.data },
                    () => {
                        console.log(this.state.products)
                    })
            }).catch(error => {
                console.log(error)
            });
    }

    handleCarouselLeft = () => {
        if (this.state.left !== 0) {
            this.setState({ left: this.state.left -= 100 },
                () => { console.log(this.state.left) })
            }
            if (this.state.left === 0) {
                this.setState({ left: 400 }
                )
            }
        
    }

    handleCarouselRight = () => {
        this.setState({ left: this.state.left += 100 },
            () => { console.log(this.state.left) })

        if (this.state.left === 500) {
            this.setState({ left: 100 }
            )
        }
    }

    render() {
        const { products } = this.state;
        const left = {
            right: `${this.state.left}vw`
        }


        const MyComponents = { // cria componetização dinamica na pagina por um objeto, assim não é necessario criar callbacks no jsx
            Discount: function showAddresses() {
                return (
                    <Row className="justify-content-around">
                        <div className="discount-container">

                            <Link to="/login">
                                <div className="discount" id="discount-a">
                                    <img src="https://http2.mlstatic.com/yamaha-fz25-abs-blueflex-2020-2020-0-km-D_NQ_NP_833124-MLB32002026521_082019-F.webp" alt="" />
                                    <h2>Até 40% off</h2>
                                    <span>Em gasolina para moto</span>
                                </div>
                            </Link>

                            <Link to="/login">
                                <div className="discount" id="discount-b">
                                    <h2>Até 75% off</h2>
                                    <span>para os aventureiros</span>
                                    <img src="https://toro.fiat.com.br/content/dam/fiat/products/226/11a/0/2020/page/360/176/29.jpg" alt="" srcset="" />
                                </div>
                            </Link>

                            <Link to="/login">
                                <div className="discount" id="discount-c">
                                    <h2>Até 40% off</h2>
                                    <span>nos esportivos</span>
                                    <img src="https://www.motorsportmaranello.com.br/wp-content/uploads//2019/12/test-drive-noleggio-Lamborghini-Hur%C3%A0can-2.jpg" alt="" srcset="" />
                                </div>
                            </Link>

                            <Link to="/login">
                                <div className="discount" id="discount-d">
                                    <h2>Até 25% off</h2>
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
                {/* CAROUSEL ===> TO COMPONENT */}
                <div className="carousel-controller">
                    <button className="left" onClick={this.handleCarouselLeft}>left</button>
                    <div className="carousel-container"  >
                        <div className="carousel carousel-a" style={left}>1</div>
                        <div className="carousel carousel-b" style={left}>2</div>
                        <div className="carousel carousel-c" style={left}>3</div>
                        <div className="carousel carousel-d" style={left}>4</div>
                        <div className="carousel carousel-e" style={left}>5</div>
                    </div>
                    <button className="right" onClick={this.handleCarouselRight}>right</button>
                </div>
                {/* CAROUSEL ===> TO COMPONENT */}

                <Container className="container-fluid">

                    {/* DISCOUNTS ===> TO COMPONENT */}
                    <MyComponents.Discount></MyComponents.Discount>
                    {/* DISCOUNTS ===> TO COMPONENT */}

                    <Row className="justify-content-between">
                        <div className="full" ></div>
                        {
                            products.map(elm => {
                                return (
                                    <CardProd
                                        key={elm.idProduct}
                                        idprod={elm.idProduct}
                                        name={elm.name}
                                        image={elm.image}
                                        price={elm.price}
                                        description={elm.description}
                                    />
                                )
                            })
                        }
                    </Row>
                </Container>
            </>
        )
    }
}

export default withRouter(Home);
