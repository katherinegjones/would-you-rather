import { Component } from 'react'
import { connect } from 'react-redux'

class UserStats extends Component {
    render() {
        const { place, user, numQuestions, numAnswers } = this.props
        return(
            <div className='user-stats-container' id={place}>
                <p className='user-stats-text'>
                {place !== null && (
                    <span>{place} place: </span>
                )}
                {user} | # Questions asked: {numQuestions} | # Questions Answered: {numAnswers}</p>
            </div>
        )
    }
}

export default connect()(UserStats)