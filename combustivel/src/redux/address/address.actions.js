import AddressActionTypes from './address.types';

export const addressSelected = address => ({
    type : AddressActionTypes.SET_ADDRESS,
    payload : address
})

export const setHidden = () => ({
    type : AddressActionTypes.SET_HIDDEN,
})

export const addressReset = address => ({
    type : AddressActionTypes.RESET_ADDRESS,
})
