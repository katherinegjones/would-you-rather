import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddUser } from '../actions/users'
import '../stylesheets/index.css'
import '../stylesheets/newuser.css'

class NewUser extends Component {
    state = {
        id: '',
        name: '',
        avatarURL: '',
        toHome: false,
        userUnique: true
    }

    handleChange = (e, option) => {
        const { curIDs } = this.props

        option === 'id' && curIDs.includes(e.target.value)
        ? this.setState (() => ({
            userUnique: false
        })) 
        : this.setState(() => ({
            [option]:e.target.value,
            userUnique: true
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props

        const { id, name, avatarURL } = this.state

        dispatch(handleAddUser({ id, name, avatarURL }))

        this.setState(() => ({
            id: '',
            name: '',
            avatarURL: '',
            toHome: true

        }))
    }
    render(){
        const { id, name, avatarURL, toHome, userUnique } = this.state

        if (toHome===true){
            return <Redirect to='/' />
        }
        return(
            <div className='main new-user-container'>
                <h1>Add a New User</h1>
                <form className='main new-user-form' onSubmit={this.handleSubmit}>
                    <input
                    className='new-user-input'
                    placeholder='Please input your first and last name'
                    value={name}
                    onChange={(event) => this.handleChange(event, 'name')}
                    />
                    <input
                    className='new-user-input'
                    placeholder='Please choose a unique user id'
                    value={id}
                    onChange={(event) => this.handleChange(event, 'id')}
                    />
                    {userUnique === false && (
                        <div className='user-not-unique'>Sorry; that id is already taken!</div>
                    )}
                    <input
                    className='new-user-input'
                    placeholder='Please input the url for your chosen avatar image'
                    value={avatarURL}
                    onChange={(event) => this.handleChange(event, 'avatarURL')}
                    />
                    
                    <button 
                    className='submit-button'
                    disabled={id === '' || name === '' || avatarURL === ''}
                    type='submit' 
                    >
                        Submit New User
                    </button>
                </form>

            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userIDs = Object.keys(users)
    return {
        curIDs: userIDs
    }
}

export default connect(mapStateToProps)(NewUser)
