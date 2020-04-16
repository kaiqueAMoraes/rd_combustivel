import AddressActionTypes from "./address.types";

const INITIAL_STATE = {
    addressSelected: null,
    hidden: false,
    addresses: []
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
                    hidden: (!state.hidden)
                }
                case AddressActionTypes.RESET_ADDRESS:
                    return {
                        ...state,
                        addressSelected: state.addressSelected
                    }
                    case AddressActionTypes.ADD_ADDRESS:
                        return {
                            ...state,
                            addresses: [...state.addresses, action.payload]
                        }   
                        case AddressActionTypes.REMOVE_ADDRESS:
                            return {
                                ...state,
                                addresses: state.addresses.push(action.payload)
                            }
                            default:
                                return state;
    }
}
export default addressReducer;