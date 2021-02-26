import { ADD_USER, RECEIVE_USERS } from '../actions/users'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action){
    switch (action.type){
        case ADD_USER:
            return {
                ...state,
                [action.user.id]: action.user
            }
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}