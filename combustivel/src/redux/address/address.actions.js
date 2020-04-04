import AddressActionTypes from './address.types';

export const SelectThisAddress = address => ({
    type : AddressActionTypes.SET_ADDRESS,
    payload : address
})
