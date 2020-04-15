import React from 'react';
import { connect } from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem
} from '../../redux/cart/cart.actions';
import './cart-item.styles.scss';

const handleChange = (e) => {
    alert(e.target.value)


}

const CartItem = ({
    item: {
        image,
        price,
        name,
        quantity,
        id
    },
    clearItem, addItem, removeItem
}) => {
    const ITEM = { id: id }
    return (
        <div className="cart-item">
            <img src={image} alt="item url img" />
            <div className="item-details">
                <span className="cart-item-name">
                    {
                        name.length > 12
                            ? name.slice(0, 19) + "..."
                            : name
                    }
                </span>
                <span className="cart-item-price">
                    {quantity} x R$ {price}
                </span>
            </div>
            <input 
                value={quantity}
                onChange={e => handleChange(e)} 
                type="number" 
                className="cart-item-number-input" 
                />
            <div onClick={() => clearItem(ITEM)}
                className='remove-button'>
                Remover
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
        dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CartItem)