import React from 'react';
import {connect} from 'react-redux';  

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem : {name, image, price, quantity}}) => {
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={image} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <div className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow'>
          &#10095;
        </div>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
)};

export default CheckoutItem;