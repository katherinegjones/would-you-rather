import { Component } from 'react'
import { connect } from 'react-redux'

class UserStats extends Component {
    render() {
        const { place, username, numQuestions, numAnswers } = this.props
        return(
            <div className='user-stats-container' id={place}>
                {place && (
                    <span>{place} place: </span>
                )}
                <p className='user-stats-text'>{username} | # Questions asked: {numQuestions} | # Questions Answered: {numAnswers}</p>
            </div>
        )
    }
}

export default connect()(UserStats)