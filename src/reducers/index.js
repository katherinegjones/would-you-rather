import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authUser'
import login from './login'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers ({
    questions,
    users,
    authedUser,
    login,
    loadingBar: loadingBarReducer
})