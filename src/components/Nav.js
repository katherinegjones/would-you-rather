import { Component } from 'react'
import { connect } from 'react-redux'
import { FaPlusCircle } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import { NavLink } from "react-router-dom"
import { setAuthedUser } from '../actions/authUser'

class Nav extends Component {
    handleLogout = (e) => {
        e.preventDefault()

        this.props.dispatch(setAuthedUser(null))
    }
    render() {
        return(
            <ul className='nav-bar'>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        LeaderBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>
                        <span><FaPlusCircle /></span>
                        Add New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/homepage' activeClassName='active'>
                        <ImHome3 />
                    </NavLink>
                </li>
                {this.props.loggedIn === true &&(
                    <li>
                        <button className='logout-button' onClick={this.handleLogout}>Logout</button>    
                    </li>
                    
                    )}
                
            </ul>
        )
    }
}

function mapStateToProps({ authedUser }){
    return {
        loggedIn: authedUser !== null
    }
}

export default connect(mapStateToProps)(Nav)