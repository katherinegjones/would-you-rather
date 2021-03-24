import { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authUser'
import { Link, Redirect } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
//import { showLoading, hideLoading } from 'react-redux-loading'

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

    handleDropSelect = (selected) => {
      
        const { dispatch } = this.props
        dispatch(setAuthedUser(selected))

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
            <div className='main login-main'>
                {this.props.location.state !== undefined && (<p>You must login first to view {this.props.location.state.from.pathname}</p>)}
                <h1> Select a user to login as</h1>
                
                <DropdownButton id='dropdown-basic-button' title='Select user'>
                    {Object.keys(users).map((key, index)=> (
                            <Dropdown.Item key={index} eventKey={`${users[key].id}`} onSelect={(eventKey) => this.handleDropSelect(eventKey)}>{users[key].name} ('{users[key].id}')</Dropdown.Item>  
                        ))}
                </DropdownButton>
                <Link to='/new'>Or, add a new user</Link>
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