import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../../redux/cart/cart.selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './cart-icon.styles.scss';

import {
    NavbarBrand
} from 'reactstrap'
import CartItem from '../../cart-item/cart-item.component';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div>
        <NavbarBrand href="#" onClick={toggleCartHidden}>
            <FontAwesomeIcon icon={faShoppingBag} className="icon-shoppingBag" />
            <span id="qtd-produto" className="navbar-span">{itemCount}</span>
        </NavbarBrand>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);