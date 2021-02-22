import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (question) {
    return (dispatch) => {       
        
        return saveQuestion(question)
        .then((question) => dispatch(addQuestion(question)))
    }
}

function answerQuestion(info){
    return {
        type: ANSWER_QUESTION,
        info
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())
        return saveQuestionAnswer({ authedUser, qid, answer })
        .then((result) => dispatch(answerQuestion(result)))
        .then(() => hideLoading())
    }
}

