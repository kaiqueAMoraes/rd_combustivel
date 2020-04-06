import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import './card-prod.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {addItem} from '../../redux/cart/cart.actions';


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
        this.props.history.push('/produto', { response: produto });    
        console.log(produto);
    }

    render() {
        const { idprod, image, price, name, addItem } = this.props;
        const item = this.state.prod;
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
                        <h5 className="prod-price">{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(price)}</h5>
                        <h5 className="prod-title" >{name}</h5>
                    </div>
                </div>
                <button onClick={()=> addItem(item)}
                    className="btn-to-cart">
                    <span>Adicionar ao Carrinho</span>
                </button>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(withRouter(CardProd));