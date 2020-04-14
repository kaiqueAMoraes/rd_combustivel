import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import Animations from '../../animations/animation_controller';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, dispatch}) => {
   return(
    <div className="cart-dropdown">
        <div className="close-cart"
            onClick={() => dispatch(toggleCartHidden())}
        >
            >>>
        </div>
    <div className="cart-items">
        {
            cartItems.length ? cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ) : <span className="empty-message">Carrinho vazio :(</span>
        }
    </div>
    <div className="cart-checkout">

<div className="cart-price-amount-container">
        <span className="cart-price-text">preço total</span>
        <span className="cart-price-amount">
        {
            Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(123.32)
        }
        </span>
</div>
        <div className="go-to-checkout"
            onClick={() => {
                history.push('/carrinho')
            }}>
                <div className="card-bank">
                    <span className="bankName">bankCard</span>
                    <span className="bankNum">**** 5858</span>
                    <div className="card-square"></div>
                </div>
                <span className="span-finalizar-compra-carrinho">finalizar compra</span></div>
            </div>
</div>
)
};

const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));