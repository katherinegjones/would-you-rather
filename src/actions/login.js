import { receiveQuestions } from './questions'
import { getQuestions } from '../utils/api'
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
            dispatch(getQuestions())
        })
        .then((questions) => dispatch(receiveQuestions(questions)))
    }
}