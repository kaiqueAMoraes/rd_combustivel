import React from 'react';
import {connect} from 'react-redux';  

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import CustomButton from '../../components/custom-button/custom-button.component';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
  const {name, image, price, quantity} = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={image} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <div className='arrow'>
          <CustomButton className="decrement" onClick={() => removeItem(cartItem)}>&#10094;</CustomButton>
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          <CustomButton className="increment">&#10095;</CustomButton>
        </div>
    <span className='price'>{price}</span>
    <div onClick={() => clearItem(cartItem)} className='remove-button'>Remover</div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  clearItem : item => dispatch(clearItemFromCart(item)),
  addItem : item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);