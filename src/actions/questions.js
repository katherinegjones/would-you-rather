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
        
        dispatch(showLoading())
        return saveQuestion(question)
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

function answerQuestion({ authedUser, qid, answer}){
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {

        dispatch(showLoading())
        return saveQuestionAnswer(info)
        .then((result) => dispatch(answerQuestion(result)))
        .then(() => dispatch(hideLoading()))
    }
}

