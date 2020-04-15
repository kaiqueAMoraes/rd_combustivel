import AddressActionTypes from "./address.types";

const INITIAL_STATE = {
    addresses: null,
    addressSelected: null,
    hidden : true
};

const addressReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AddressActionTypes.SET_ADDRESS:
            return {
                ...state,
                addressSelected: action.payload
            }
            case AddressActionTypes.SET_HIDDEN:
                return {
                    ...state,
                    hidden: !INITIAL_STATE.hidden
                }
            case AddressActionTypes.RESET_ADDRESS:
                return {
                    ...state,
                    addressSelected: INITIAL_STATE.addressSelected
                }
                default:
                    return state;
    }
}
export default addressReducer;