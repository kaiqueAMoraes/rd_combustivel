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

export const addAddress = address => ({
    type: AddressActionTypes.ADD_ADDRESS,
    payload: address
})

export const removeAddress = address => ({
    type: AddressActionTypes.REMOVE_ADDRESS,
    payload: address
})