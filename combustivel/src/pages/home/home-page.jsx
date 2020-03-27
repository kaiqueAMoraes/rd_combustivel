import React, { Component } from 'react';
import axios from 'axios'

import './home.styles.scss';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/find-all-products")
            .then(response => {

                this.setState({ products: response.data },
                    () => {
                        console.log(this.state.products)
                    })
            }).catch(error => {
                console.log(error)
            });
    }


    render() {
        const { products } = this.state;
        const { description, idCategory, image, idProduct, name, quantStock, price } = this.state.products;
        const MyComponents = { // cria componetização dinamica na pagina por um objeto, assim não é necessario criar callbacks no jsx
            Products: function showProducts() {
                return products.map(elm => {
                    return (
                        <div key={elm.idProduct} className="prod-card">
                            
                                <div className="prod-image">
                                    <img src={elm.image} alt="image prod" />
                                </div>
                                <div className="prod-content">
                                    <h5 className="prod-price">R${elm.price}</h5>
                                    <h5 className="prod-title">{elm.name}</h5>
                                    <button className="btn-to-cart">Adicionar ao Carrinho</button>
                                </div>
                         
                        </div>
                    )
                })
            }
        }


        //console.log(this.state.products)
        return (
            <MyComponents.Products></MyComponents.Products>
        )
    }
}
