import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ANSWER_QUESTION:
            let { question } = action

            return {
                ...state,
                [question.id]:
                {
                    ...state[question.id],
                    [question.answer]: {
                        ...state[question.answer],
                        votes: state[question.answer].concat(question.authedUser)}
                }
            }
        default:
            return state
    }
}