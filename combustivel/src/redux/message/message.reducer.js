import MessageActionTypes from './message.types'

const INITIAL_STATE = {
    text: "",
    status : "",
};

const messageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MessageActionTypes.SUCCESS_MESSAGE:
            return {
                ...state,
                text: action.payload,
                status : "success"
            }
            case MessageActionTypes.ERROR_MESSAGE:
                return {
                    ...state,
                    text: action.payload,
                    status : "error"
                }
                default:
                    return state;
    }
}

export default messageReducer;