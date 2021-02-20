export const LOGIN  = 'LOGIN'

function login (authedUser) {
    return {
        type: LOGIN,
        authedUser,
    }
}

export function handleLogin (authedUser) {
    return login(authedUser)
}