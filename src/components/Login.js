import { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/login'

class Login extends Component {
    handleSelect = (e) => {
        e.preventDefault()

        const { dispatch } = this.props

        dispatch(handleLogin(e.target.value))
    }
    render(){
        const { usernames } = this.props
        return(
            <div class='login-main'>
                <h1> Select a user to login as</h1>
                <select value='Login' onChange={this.handleSelect}>
                    <option value="login" disabled>Select User</option>
                    {usernames.map((username)=> (
                        <option value={`${username.uid}`}>{username.name}</option>  
                    ))}
                </select>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const names = users.map((user) => {
        return {
            name: user.name,
            uid: user.id
        }
    })
    return {
        usernames: names
    }
}

export default connect(mapStateToProps)(Login)