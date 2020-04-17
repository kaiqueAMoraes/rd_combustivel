import {
    createSelector
} from 'reselect';

const userSelector = state => state.user;

export const getCurrentUser = createSelector(
    [userSelector],
    (user) => user.currentUser
)

export const getCurrentUserId = createSelector(
    [userSelector],
    (user) => user.currentUser.idUser
)