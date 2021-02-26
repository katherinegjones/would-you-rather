import { LOGIN } from '../actions/login'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action){
    switch(action.type){
        case LOGIN:
            return action.authedUser
        default:
            return state
    }
}