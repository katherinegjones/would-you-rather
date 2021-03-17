import { SET_AUTHED_USER } from '../actions/authUser'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = null, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return action.id
        default:
            return state
    }
}