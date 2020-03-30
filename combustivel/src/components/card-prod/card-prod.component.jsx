import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './card-prod.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'



class CardProd extends Component {
    constructor(props) {
        super(props)

        const { idprod, image, price, name, description } = this.props;
        this.state = {
            prod: {
                id: idprod,
                image: image,
                price: price,
                name: name,
                description: description
            }
        }
        this.handleProduto = this.handleProduto.bind(this)
    }

    handleCarrinho = e => {
        e.preventDefault()
        const produto = this.state.prod
        alert(`${produto.name} adicionado ao carrinho`)
    }

    handleProduto = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const produto = this.state.prod
        //this.props.history.push('/dashboard/edit-usuario', { response: produto });    
        console.log(produto);
    }

    render() {
        const { idprod, image, price, name } = this.props;

        return (
            <div className="prod-card">
                <div className="heart">
                <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                </div>
                <div key={idprod} onClick={this.handleProduto.bind(this)}>
                    <div className="prod-image" >
                        <img src={image} alt="image prod" />
                    </div>
                    <div className="prod-content">
                        <h5 className="prod-price">R${price}</h5>
                        <h5 className="prod-title" >{name}</h5>

                    </div>
                </div>
                <button onClick={this.handleCarrinho.bind(this)}
                    className="btn-to-cart">
                    <span>Adicionar ao Carrinho</span>
                </button>
            </div>
        )
    }
}
export default withRouter(CardProd);