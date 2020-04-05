import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import addressReducer from './address/address.reducer';

export default combineReducers({
    user : userReducer,
    cart : cartReducer,
    address : addressReducer
});
