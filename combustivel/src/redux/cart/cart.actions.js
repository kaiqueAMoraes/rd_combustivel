import CartActionTypes from './cart.types';

export const resetCart = () => ({
    type: CartActionTypes.RESET_CART
})

export const toggleCartIn = () => ({
    type : CartActionTypes.CALL_CART_IN
})

export const toggleCartOff = () => ({
    type : CartActionTypes.CALL_CART_OFF
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})