import  AddressActionTypes from "./address.types";

const INITIAL_STATE = {
    addressSelected: null
};

const addressReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AddressActionTypes.SET_ADDRESS:
            return{
                ...state,
                addressSelected : action.payload
            }
            default : 
                return state;
    }
}
export default addressReducer;