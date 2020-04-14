import AddressActionTypes from "./address.types";

const INITIAL_STATE = {
    addressSelected: null
};

const addressReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AddressActionTypes.SET_ADDRESS:
            return {
                ...state,
                addressSelected: action.payload
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