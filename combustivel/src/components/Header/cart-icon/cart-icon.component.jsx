import React from 'react';
import {connect} from 'react-redux';

import {toggleCartIn, toggleCartOff} from '../../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../../redux/cart/cart.selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './cart-icon.styles.scss';

import {
    NavbarBrand
} from 'reactstrap'
import CartItem from '../../cart-item/cart-item.component';

const CartIcon = ({bring_cart,hide_cart, itemCount}) => (
    <div>
        <NavbarBrand href="#" onClick={() => bring_cart()}>
            <FontAwesomeIcon icon={faShoppingBag} className="icon-shoppingBag" />
            <span id="qtd-produto" className="navbar-span">{itemCount}</span>
        </NavbarBrand>
    </div>
)

const mapDispatchToProps = dispatch => ({
    bring_cart: () => dispatch(toggleCartIn()),
    hide_cart: () => dispatch(toggleCartOff())
})

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);