import { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authUser'
import { Redirect } from 'react-router-dom'
import { showLoading, hideLoading } from 'react-redux-loading'

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
        

        dispatch(setAuthedUser(this.state.selected))
    }
    render(){
        const { authedUser, users } = this.props

        

        const { from } = this.props.location.state || {from: {pathname: '/homepage'}}

        console.log(this.props.location.state)
        console.log("Authed user: ", authedUser)
        if (authedUser !== null){
            return <Redirect to={from} />
        }

        return(
            <div className='login-main'>
                {this.props.location.state !== undefined && (<p>You must login first to view {this.props.location.state.from.pathname}</p>)}
                <h1> Select a user to login as</h1>
                <select name='Login' onChange={this.handleChange} required>
                    <option value='' disabled selected hidden>Select User</option>
                    {Object.keys(users).map((key, index)=> (
                        <option key={index} value={`${users[key].id}`}>{users[key].name}</option>  
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