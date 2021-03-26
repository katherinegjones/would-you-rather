import { Component } from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'
import '../stylesheets/leaderboard.css'
import '../stylesheets/index.css'
import { FaMedal } from 'react-icons/fa'

class LeaderBoard extends Component {
    render() {
        const places = ["first", "second", "third", "fourth", "fifth"]
        const { userStats } = this.props
        return(
            <div className='main leaderboard-main'>
                    <h1><span><FaMedal /></span> Leaderboard<span><FaMedal /></span> </h1>
                    <ul className='user-stats-list'>
                        {userStats.map((user, index) => (
                            <li key={index} className='user-stats-item'>
                                <UserStats
                                    place = {index < 5
                                    ? places[index]
                                    : null
                                    }
                                    user={user.username}
                                    numQuestions={user.numAsked}
                                    numAnswers={user.numAnswered}
                                />
                            </li>
                        ))}
                    </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const stats = Object.keys(users).map((user) => {
        return {
            username: users[user].name,
            numAnswered: Object.entries(users[user].answers).length,
            numAsked: users[user].questions.length
        }
    })

    return {
        userStats: stats.sort((a, b) => b.numAnswered - a.numAnswered)
    }
}

export default connect(mapStateToProps)(LeaderBoard)