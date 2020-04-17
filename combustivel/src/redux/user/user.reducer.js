const INITIAL_STATE = {
    currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
                return {
                    ...state,
                    currentUser : action.payload
                }
                case 'RESET_USER':
                    return {
                        ...state,
                        currentUser : INITIAL_STATE.currentUser
                    }
                break;
        default:
                return state;
            break;
    }
}

export default userReducer;