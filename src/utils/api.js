import {
    _getQuestions,
    _getUsers,
    _saveUser,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA.js'



export function getInitialData() {
    return Promise.all([
        _getQuestions(),
        _getUsers()
    ]).then(([questions, users]) => ({
        questions,
        users
    }))
}

export function saveUser(user) {
    return _saveUser(user)
}
export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info)
}

