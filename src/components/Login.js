import { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/login'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        selected: ''
    }

    handleChange = (e) => {
        e.preventDefault()

        this.setState({
            selected: e.target.value
        })
    }
    handleSelect = (e) => {
        e.preventDefault()

        const { dispatch } = this.props

        dispatch(handleLogin(e.target.value))
    }
    render(){
        const { users, authedUser } = this.props

        const { from } = this.props.location.state || {from: {pathname: '/'}}

        if (authedUser){
            <Redirect to={from} />
        }

        return(
            <div class='login-main'>
                {this.props.location.state && (<p>You must login first to view this page.</p>)}
                <h1> Select a user to login as</h1>
                <select value='Login' onChange={this.handleChange}>
                    <option value="login" disabled>Select User</option>
                    {users.map((username)=> (
                        <option value={`${username.uid}`}>{username.name}</option>  
                    ))}
                </select>
                <button disabled={this.state.selected === ''} onClick={this.handleSelect}>Login</button>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    
    return {
        users,
        authedUser 
    }
}

export default connect(mapStateToProps)(Login)