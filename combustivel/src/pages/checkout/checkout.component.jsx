import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems , selectCartTotal} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="headerblock">
                <span>Produto</span>
            </div>
            <div className="headerblock">
                <span>Descrição</span>
            </div>
            <div className="headerblock">
                <span>Quantidade</span>
            </div>
            <div className="headerblock">
                <span>Preço</span>
            </div>
            <div className="headerblock">
                <span>Remover</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                    cartItem.name
                )
        }
        <div className="total">
            <span>TOTAL : ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems,
  total : selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);