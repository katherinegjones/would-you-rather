import { Component } from 'react'
import { connect } from 'react-redux'
import '../stylesheets/leaderboard.css'

class UserStats extends Component {
    render() {
        const { place, user, numQuestions, numAnswers } = this.props
        return(
            <div className='user-stats-container' id={place}>
                <p className='user-stats-text'><strong>
                {place !== null && (
                    <span>{place.charAt(0).toUpperCase() + place.slice(1)} place: </span>
                )}
                {user} | # Questions asked: {numQuestions} | # Questions Answered: {numAnswers}</strong></p>
            </div>
        )
    }
}

export default connect()(UserStats)