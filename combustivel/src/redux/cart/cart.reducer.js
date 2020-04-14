import  CartActionTypes from "./cart.types";
import { addItemsToCart, removeItemsFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden : false,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.CALL_CART_IN:
            return{
                ...state,
                hidden : (!state.hidden)
            }
            case CartActionTypes.CALL_CART_OFF:
            return{
                ...state,
                hidden : (!state.hidden)
            }
            break;
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
            case CartActionTypes.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeItemsFromCart(state.cartItems, action.payload)
                }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                    cartItems: state.cartItems.filter(
                        cartItem => cartItem.id !== action.payload.id
                    )
            }
            case CartActionTypes.RESET_CART:
                return {
                    ...state,
                        cartItems: INITIAL_STATE.cartItems
                }
        default:
            return state;
            break;
    }
}

export default cartReducer;