import { ADD_USER, ADD_ANSWER, RECEIVE_USERS } from '../actions/users'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action){
    switch (action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER:
            const { user } = action
            return {
                ...state,
                [user.id]: {
                    ...user,
                    answers: {},
                    questions: []
                }
            }

        case ADD_ANSWER:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer                    
                    }
                }
            }
        default:
            return state
    }
}