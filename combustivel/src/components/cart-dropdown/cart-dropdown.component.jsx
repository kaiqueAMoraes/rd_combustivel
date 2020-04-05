import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, dispatch}) => {
   return(
    <div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.length ? cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ) : <span className="empty-message">Carrinho vazio :(</span>
        }
    </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>ver carrinho</CustomButton>
</div>
   )
};

const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));