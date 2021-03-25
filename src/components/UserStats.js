import { Component } from 'react'
import { connect } from 'react-redux'
import '../stylesheets/leaderboard.css'
import { FaMedal } from 'react-icons/fa'

class UserStats extends Component {
    render() {
        const { place, user, numQuestions, numAnswers } = this.props
        return(
            <div className='user-stats-container' id={place}>
                <p><strong>
                {place !== null && (
                    <span>{place.charAt(0).toUpperCase() + place.slice(1)} place: </span>
                )}
                {user}</strong></p> <span className='separator'><FaMedal /></span><p><strong> # Questions asked: {numQuestions}</strong></p> <span className='separator'><FaMedal /></span><p><strong> # Questions Answered: {numAnswers}</strong></p>
            </div>
        )
    }
}

export default connect()(UserStats)