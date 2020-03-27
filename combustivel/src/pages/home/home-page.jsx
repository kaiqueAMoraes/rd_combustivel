import React, { Component } from 'react';
import axios from 'axios'

// import { Container } from './styles';

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            products : []
        }
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/find-all-products")
        .then(response => {
        
            this.setState({products : response.data},
                () => {
                    console.log(this.state.products)
                })
        }).catch(error => {
            console.log(error)
        });
    }
    
    
    render() {
        const {products} = this.state;
        const {description, idCategory, image, idProduct, name, quantStock, price} = this.state.products;
        const MyComponents = { // cria componetização dinamica na pagina por um objeto, assim não é necessario criar callbacks no jsx
            Products: function showProducts() {
                return products.map(elm => {
                    return (
                        <div key={elm.idProduct} className="prod-card">    
                            <img src={elm.image} alt="image prod"/>
                            <h5>{elm.name}</h5>
                            <h5>{elm.price}</h5>
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
