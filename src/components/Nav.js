import { Component } from 'react'
import { connect } from 'react-redux'
import { FaPlusCircle } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return(
            <ul className='nav-bar'>
                <li>LeaderBoard</li>
                <li>
                    <FaPlusCircle />
                    Add New Question
                </li>
                <li>Logout</li>
            </ul>
        )
    }
}

export default connect()(Nav)