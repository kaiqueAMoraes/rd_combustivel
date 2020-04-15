import React from 'react';
import { connect } from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem,
    changeItemQuantity
} from '../../redux/cart/cart.actions';
import './cart-item.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const handleChange = (e, id) => {
    return {
         id,
         quantity :  e.target.value * 1
    }
}

const CartItem = ({
    item: {
        image,
        price,
        name,
        quantity,
        id
    },
    clearItem, itemQuantity
}) => {
    const ITEM = { id: id }
    return (
        <div className="cart-item">
            <img src={image} alt="item url img" />
            <div className="item-details">
                <span className="cart-item-name">
                    {
                        name.length > 22
                            ? name.slice(0, 22) + "..."
                            : name
                    }
                </span>
                <span className="cart-item-price">
                    <span className="unit-price">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</span>
                </span>
            </div>
            <input 
                value={quantity}
                onChange={e => itemQuantity(handleChange(e, id))} 
                type="number" 
                className="cart-item-number-input" 
                />
            <div onClick={() => clearItem(ITEM)}
                className="remove-item-cart">
                    <FontAwesomeIcon icon={faTrash} className="icon-trash"/>
                </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    clearItem: item => 
        dispatch(clearItemFromCart(item)),
    addItem: item =>
        dispatch(addItem(item)),
    removeItem: item => 
        dispatch(removeItem(item)),
    itemQuantity: item => 
        dispatch(changeItemQuantity(item))
})


export default connect(null, mapDispatchToProps)(CartItem)