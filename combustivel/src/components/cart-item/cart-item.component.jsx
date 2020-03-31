import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { image, price, name, quantity } }) => {
    return (
        <div className="cart-item">
            <img src={image} alt="item url img" />
            <div className="item-details">
                <span className="name">{name.length > 25 ? name.slice(0,25) + "..." : name}</span>
                <span className="price"> {quantity} x R$ {price}</span>
            </div>
        </div>
    )
}

export default CartItem