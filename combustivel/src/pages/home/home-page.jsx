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
            newer: [],
            left: 100,
            right: 0,
            showbtnbefore: false,
            showbtnnext : true
        }
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/find-all-products")
            .then(response => {
                console.log(response.data[0].idProduct)
                this.setState({ products: response.data },
                    () => {
                        const n = [];
                        for (let i = 0; i < 15; i++) {
                            const element = this.state.products[i];
                            n.push(element);
                        }
                        this.setState({ newer: n })
                    })
            }).catch(error => {
                console.log(error)
            });


    }

    // HANDLES DO CAROUSEL COMEÇAM AQUI CAROUSEL COMEÇA AQUI
    handleCarouselLeft = () => {
        // LEFT É O STATE "FINAL=0/INITIAL=400" QUE EMPURRA AS "DIVS"
        if (this.state.left !== 0) {
            // A CONTA FOI FEITA USANDO VW(viewport width) POR ISSO TEM QUES ETAR SEMPRE INCREMENTANDO OU DECREMENTANDO 100
            this.setState({ left: this.state.left -= 100 }, 
                () => { console.log(this.state.left) })
        }
        // CHEGANDO A ZERO ELE RESETA AO INITIAL STATE
        if (this.state.left === 0) {
            this.setState({ left: 400 }
            )
        }

    }

    // scroll para a direita do carousel ---> ///
    handleCarouselRight = () => {
        this.setState({ left: this.state.left += 100 },
            () => { console.log(this.state.left) })

        if (this.state.left === 500) {
            this.setState({ left: 100 }
            )
        }
    }
    // scroll para a direita do carousel ---> termina aqui ///



    // SCROLL dos produtos começa aqui ///

    // scroll para a esquerda <--- ///

    handleScrollProducts = () => {
        let counter = 0; //COUNTER COMEÇA EM ZERO- ELE É O HOLDER DO INTERVAL
        let count = 936 / 11; // 936 É O VALOR DO PRIMEIRO SCROLL DOS 5 ITENS, É DIVIDIDO EM 11 POIS O COUNT PARA DEPOIS DE 10
        let limit = 936 * 2 - 20; // não mudar esse desgraçado aqui // CONTA PARA DETERMINAR QUANDO MOSTRAR O BOTÃO

        // ATRIBUINDO UMA FUNÇÃO QUE VAI FUNCIONAR COMO INTERVAL, PARA TER CONTROLE DE ITERAÇÃO
        let scrollControler =  () => {
            if (counter <= 10) { //NUMERO DE VEZES PARA ITERAR E FAZER A ANIMAÇÃO DE SCROLL USANDO CLASSES
                this.setState({ right: this.state.right -= count }, // DIVISÃO DO TOTAL / 11 DA TELA PARA INCREMENTAR UMA VOLTA COMPLETA DOS ITENS
                    () => {
                        console.log(this.state.right) //DEBUG TODO: APAGAR DEPOIS ISSO AQUI 
                        counter++; //INCREMENTA VALOR
                    });
                    //DEBUG TODO: APAGAR DEPOIS ISSO AQUI 
                    console.log('counter : ' + counter + "// count : " + count + ` // limit is ${limit} `)
                } else {
                    //LIMPA O STATE E PREVINI DE ACONTECER APÓS AS 10 ITERAÇÕES = 936px/100vw
                    clearInterval(scrollAction);
                }
            }
            let scrollAction = setInterval(scrollControler, 10);

            //CHECA VALOR TOTAL, SE FOR A ULTIMA ITERAÇÃO e
            this.setState({showbtnnext : true})

            if(this.state.right >= limit ){
                this.setState({showbtnbefore : false})
            }
    }


    // scroll para a direita ---> ///
    handleScrollNextProducts = () => {
        let counter = 0; //COUNTER COMEÇA EM ZERO- ELE É O HOLDER DO INTERVAL
        let count = 936 / 11; // 936 É O VALOR DO PRIMEIRO SCROLL DOS 5 ITENS, É DIVIDIDO EM 11 POIS O COUNT PARA DEPOIS DE 10
        let limit = 936 * 2 - 20; // não mudar esse desgraçado aqui // CONTA PARA DETERMINAR QUANDO MOSTRAR O BOTÃO

        // ATRIBUINDO UMA FUNÇÃO QUE VAI FUNCIONAR COMO INTERVAL, PARA TER CONTROLE DE ITERAÇÃO
        let scrollControler =  () => {
            if (counter <= 10) { //NUMERO DE VEZES PARA ITERAR E FAZER A ANIMAÇÃO DE SCROLL USANDO CLASSES
                this.setState({ right: this.state.right += count }, // DIVISÃO DO TOTAL / 11 DA TELA PARA INCREMENTAR UMA VOLTA COMPLETA DOS ITENS
                    () => {
                        console.log(this.state.right) //DEBUG TODO: APAGAR DEPOIS ISSO AQUI 
                        counter++; //INCREMENTA VALOR
                    });
                    //DEBUG TODO: APAGAR DEPOIS ISSO AQUI 
                    console.log('counter : ' + counter + "// count : " + count + ` // limit is ${limit} `)
                } else {
                    //LIMPA O STATE E PREVINI DE ACONTECER APÓS AS 10 ITERAÇÕES = 936px/100vw
                    clearInterval(scrollAction);
                }
            }
            let scrollAction = setInterval(scrollControler, 10);
            this.setState({showbtnbefore : true})
            //CHECA VALOR TOTAL, SE FOR A ULTIMA ITERAÇÃO e
            if(this.state.right >= limit ){
                this.setState({showbtnnext : false})
            }
    }
    // scroll para a direita ---> termina aqui ///


    render() {
        const { products, newer, showbtnnext, showbtnbefore } = this.state;
        const left = {
            right: `${this.state.left}vw`,
        }

        const right = {
            transition: "all 1s ease-out",
            right: `${this.state.right}px`
        }

        const handleScrollProducts = this.handleScrollProducts;
        const handleScrollNextProducts = this.handleScrollNextProducts

        const MyComponents = { // cria componetização dinamica na pagina por um objeto, assim não é necessario criar callbacks no jsx
            Discount: function showDiscountItems() {
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
            },
            scrollProducts: function showNewerProducts() {
                return (
                    <Row className="hold">
                        <div className="scroll-products-container-control">
                            <div style={right} className="scroll-products-container">
                                {
                                    newer.map(elm => {
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
                            </div>
                        </div>
                        { showbtnbefore ?  (<button className="btn-before" onClick={handleScrollProducts}>before</button>) : "" }
                        { showbtnnext ?  (<button className="btn-next" onClick={handleScrollNextProducts}>next</button>) : "" }
                        
                    </Row>
                )
            }
        }



        return (
            <>
                {/* CAROUSEL ===> TO CREATE COMPONENT */}
                <div className="carousel-controller">
                    <button className="left" onClick={this.handleCarouselLeft}>left</button>
                    <div className="carousel-container">
                        <div className="carousel carousel-a" style={left}><span>0</span></div>
                        <div className="carousel carousel-b" style={left}><span>1</span></div>
                        <div className="carousel carousel-c" style={left}><span>2</span></div>
                        <div className="carousel carousel-d" style={left}><span>3</span></div>
                        <div className="carousel carousel-e" style={left}><span>4</span></div>
                    </div>
                    <button className="right" onClick={this.handleCarouselRight}>right</button>
                </div>
                {/* CAROUSEL ===> TO CREATE COMPONENT */}

                <Container className="container-fluid">

                    {/* DISCOUNTS ===> TO CREATE COMPONENT */}
                    <MyComponents.Discount></MyComponents.Discount>
                    {/* DISCOUNTS ===> TO CREATE COMPONENT */}

                    {/* NEWER PRODUCTS ===> TO CREATE COMPONENT */}
                    <h2>Veja os mais vendidos</h2>
                    <MyComponents.scrollProducts></MyComponents.scrollProducts>
                    {/* NEWER PRODUCTS ===> TO CREATE COMPONENT */}

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
