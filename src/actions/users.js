import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function handleReceiveUsers(users) {
    return (dispatch) => {
        dispatch(showLoading())
        .then(() => dispatch(receiveUsers(users)))
        .then(() => dispatch(hideLoading()))
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}