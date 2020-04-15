import {
    createSelector
} from 'reselect';

const addressSelector = state => state.address;

export const selectAllAddresses = createSelector(
    [addressSelector],
    (address) => address.addresses
)

export const mapSelectedAddress = createSelector(
    [addressSelector],
    (address) => address.addressSelected
)

export const isHidden = createSelector(
    [addressSelector],
    (address) => address.hidden
)