import AddressActionTypes from "./address.types";
import { loadAddressInfo } from './address.utils';

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
                        addressSelected: null
                    }
                    case AddressActionTypes.ADD_ADDRESS:
                        return {
                            ...state,
                            addresses: action.payload
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