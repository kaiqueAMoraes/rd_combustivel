import AddressActionTypes from './address.types';

export const addressSelected = address => ({
    type : AddressActionTypes.SET_ADDRESS,
    payload : address
})
