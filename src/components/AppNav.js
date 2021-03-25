import { Component } from 'react'
import { connect } from 'react-redux'
import { FaPlusCircle } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import { NavLink } from "react-router-dom"
import { setAuthedUser } from '../actions/authUser'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import '../stylesheets/index.css'
import '../stylesheets/appnav.css'
import Navbar from 'react-bootstrap/Navbar'

class AppNav extends Component {
    handleLogout = (e) => {
        e.preventDefault()

        this.props.dispatch(setAuthedUser(null))
    }
    render() {
        const { users, authedUser } = this.props
        return(
            <div>
                <NavBar expand='md' bg='dark' variant='dark'>
                    <NavBar.Brand>Would You Rather?</NavBar.Brand>
                    <Nav>
                        <Navbar.Toggle />
                        <Navbar.Collapse>                 
                            <Nav.Link
                                as={NavLink} 
                                to='/leaderboard' 
                                activeClassName='active active-nav-link'
                                className='app-nav-link'
                                >
                                LeaderBoard
                            </Nav.Link>
                    
                            <Nav.Link
                                as={NavLink} 
                                to='/add' 
                                activeClassName='active active-nav-link'
                                className='app-nav-link'
                                >
                                <span><FaPlusCircle /></span>
                                Add New Question
                            </Nav.Link>
                    
                            <Nav.Link
                                as={NavLink} 
                                to='/homepage' 
                                activeClassName='active active-nav-link'
                                className='app-nav-link'
                                >
                                <ImHome3 />
                            </Nav.Link>
                        </Navbar.Collapse> 
                   </Nav>
                    {this.props.loggedIn === true &&(
                        <Nav className='right-justify'>
                            <Navbar.Text as='p' className='welcome'> Welcome, {users[authedUser].name}! </Navbar.Text>
                            <Button className='logout-button' onClick={this.handleLogout}>Logout</Button>
                            
                        </Nav>
                        )}
                    
               
                </NavBar>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }){
    return {
        authedUser,
        users,
        loggedIn: authedUser !== null
    }
}

export default connect(mapStateToProps)(AppNav)