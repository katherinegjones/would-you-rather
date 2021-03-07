import { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/login'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    handleSelect = (e) => {
        e.preventDefault()

        const { dispatch } = this.props

        dispatch(handleLogin(e.target.value))
    }
    render(){
        const { usernames, authed } = this.props

        const { from } = this.props.location.state || {from: {pathname: '/'}}

        if (authed === true){
            <Redirect to={from} />
        }

        return(
            <div class='login-main'>
                {this.props.location.state && (<p>You must login first to view this page.</p>)}
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

function mapStateToProps({ users, authedUser }) {
    const names = users.map((user) => {
        return {
            name: user.name,
            uid: user.id
        }
    })
    return {
        usernames: names,
        authed: authedUser !== null 
    }
}

export default connect(mapStateToProps)(Login)