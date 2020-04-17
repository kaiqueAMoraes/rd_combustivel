export const setCurrentUser = user => ({
    type : 'SET_CURRENT_USER',
    payload : user
})

export const resetUser = () => ({
    type : 'RESET_USER'
})