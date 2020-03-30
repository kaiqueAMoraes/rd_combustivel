import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../../redux/cart/cart.actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './cart-icon.styles.scss';

import {
    NavbarBrand
} from 'reactstrap'

const CartIcon = ({toggleCartHidden}) => (
    <div>
        <NavbarBrand href="#" onClick={toggleCartHidden}>
            <FontAwesomeIcon icon={faShoppingBag} className="icon-shoppingBag" />
            <span id="qtd-produto" className="navbar-span">0</span>
        </NavbarBrand>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);