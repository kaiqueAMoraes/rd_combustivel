
import React from 'react';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './cart-icon.styles.scss';

import {
    NavbarBrand
} from 'reactstrap'

const CartIcon = () => (
    <div>
        <NavbarBrand href="#">
            <FontAwesomeIcon icon={faShoppingBag} className="icon-shoppingBag" />
            <span id="qtd-produto" className="navbar-span">0</span>
        </NavbarBrand>
    </div>
)


export default CartIcon;