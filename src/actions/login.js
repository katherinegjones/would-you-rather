import { setAuthedUser } from './authUser'

export const LOGIN  = 'LOGIN'


function login (authedUser) {
    return {
        type: LOGIN,
        authedUser,
    }
}

export function handleLogin(id) {
    return dispatch => {
        dispatch(setAuthedUser(id))
        .then((authedUser) => {
            dispatch(login(authedUser))
        })
    }
}