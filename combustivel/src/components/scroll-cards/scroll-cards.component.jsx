import React, { Component } from 'react';
import axios from 'axios'

import CardProd from "../card-prod/card-prod.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


import './scroll-cards.styles.scss';

export default class scrollCards extends Component {
    constructor(props){
        super(props)
            this.state = {
                products: [],
                newer: [],
                right: 0,
                showbtnbefore: false,
                showbtnnext: true
            }
    }

    componentDidMount = async () => {
        await axios.get(this.props.produtosApi)
            .then(response => {
                this.setState({ products: response.data })
            }).catch(error => {
                console.log(error)
            });
    }


        // SCROLL dos produtos começa aqui ///

    // scroll para a esquerda <--- ///

    handleScrollProducts = () => {
        let counter = 0; //COUNTER COMEÇA EM ZERO- ELE É O HOLDER DO INTERVAL
        let count = 936 / 11; // 936 É O VALOR DO PRIMEIRO SCROLL DOS 5 ITENS, É DIVIDIDO EM 11 POIS O COUNT PARA DEPOIS DE 10
        let limit = 936 / 2; // não mudar esse desgraçado aqui // CONTA PARA DETERMINAR QUANDO MOSTRAR O BOTÃO

        // ATRIBUINDO UMA FUNÇÃO QUE VAI FUNCIONAR COMO INTERVAL, PARA TER CONTROLE DE ITERAÇÃO
        let scrollControler = () => {
            if (counter <= 10) { //NUMERO DE VEZES PARA ITERAR E FAZER A ANIMAÇÃO DE SCROLL USANDO CLASSES
                this.setState({ right: this.state.right -= count }, // DIVISÃO DO TOTAL / 11 DA TELA PARA INCREMENTAR UMA VOLTA COMPLETA DOS ITENS
                    () => {
                        counter++; //INCREMENTA VALOR
                        if (this.state.right <= limit) {
                            this.setState({ showbtnbefore: false })
                        }
                    });
                //DEBUG TODO: APAGAR DEPOIS ISSO AQUI 
            } else {
                //LIMPA O STATE E PREVINI DE ACONTECER APÓS AS 10 ITERAÇÕES = 936px/100vw
                clearInterval(scrollAction);
            }
        }
        let scrollAction = setInterval(scrollControler, 10);

        //CHECA VALOR TOTAL, SE FOR A ULTIMA ITERAÇÃO e
        this.setState({ showbtnnext: true })


    }


    // scroll para a direita ---> ///
    handleScrollNextProducts = () => {
        let counter = 0; //COUNTER COMEÇA EM ZERO- ELE É O HOLDER DO INTERVAL
        let count = 936 / 11; // 936 É O VALOR DO PRIMEIRO SCROLL DOS 5 ITENS, É DIVIDIDO EM 11 POIS O COUNT PARA DEPOIS DE 10
        let limit = 936 * 3 - 1; // não mudar esse desgraçado aqui // CONTA PARA DETERMINAR QUANDO MOSTRAR O BOTÃO

        // ATRIBUINDO UMA FUNÇÃO QUE VAI FUNCIONAR COMO INTERVAL, PARA TER CONTROLE DE ITERAÇÃO
        let scrollControler = () => {
            if (counter <= 10) { //NUMERO DE VEZES PARA ITERAR E FAZER A ANIMAÇÃO DE SCROLL USANDO CLASSES
                this.setState({ right: this.state.right += count }, // DIVISÃO DO TOTAL / 11 DA TELA PARA INCREMENTAR UMA VOLTA COMPLETA DOS ITENS
                    () => {
                        //CHECA VALOR TOTAL, SE FOR A ULTIMA ITERAÇÃO e
                        if (this.state.right >= limit) {
                            this.setState({ showbtnnext: false })
                        }
                        counter++; //INCREMENTA VALOR
                    });
            } else {
                //LIMPA O STATE E PREVINI DE ACONTECER APÓS AS 10 ITERAÇÕES = 936px/100vw
                clearInterval(scrollAction);
            }
        }
        let scrollAction = setInterval(scrollControler, 1);
        this.setState({ showbtnbefore: true })

    }
    // scroll para a direita ---> termina aqui ///

    render() {
        const { products, showbtnnext, showbtnbefore } = this.state;

        const right = {
            right: `${this.state.right}px`
        }
        const handleScrollProducts = this.handleScrollProducts;
        const handleScrollNextProducts = this.handleScrollNextProducts

        return (
            <Row className="hold">
                <div className="scroll-products-container-control">
                    <div style={right} className="scroll-products-container">
                        {
                            this.state.products.slice(0, 15).map(elm => {
                                return (
                                    <CardProd
                                        className="test"
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
                {showbtnbefore ?
                    (<button className="btn-before" onClick={handleScrollProducts}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>) : ""}
                {showbtnnext ?
                    (<button className="btn-next" onClick={handleScrollNextProducts}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>) : ""}
            </Row>
        )
    }
}
