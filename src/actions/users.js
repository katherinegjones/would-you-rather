import { saveUser } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}


function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}

export function handleAddUser(user){
    return(dispatch) => {
        dispatch(showLoading())
        return saveUser(user)
        .then(() => dispatch(addUser(user)))
        .then(() => dispatch(hideLoading()))
}
}
export function addUserAnswer({authedUser, qid, answer }){
    return {
        type: ADD_ANSWER,
        authedUser,
        qid,
        answer
    }
}