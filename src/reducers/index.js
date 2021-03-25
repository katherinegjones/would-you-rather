import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authUser'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers ({
    questions,
    users,
    authedUser,
    loadingBar: loadingBarReducer,
})