import MessageActionTypes from './message.types';

export const successMessage = message => ({
    type : MessageActionTypes.SUCCESS_MESSAGE,
    payload : message
})

export const errorMessage = message => ({
    type : MessageActionTypes.ERROR_MESSAGE,
    payload : message
})
