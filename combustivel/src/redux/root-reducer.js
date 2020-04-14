import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import addressReducer from './address/address.reducer';
import messageReducer from './message/message.reducer';

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart', 'address', 'user']
}

const rootReducer =  combineReducers({
    user : userReducer,
    cart : cartReducer,
    address : addressReducer,
    message : messageReducer
});

export default persistReducer(persistConfig, rootReducer);
