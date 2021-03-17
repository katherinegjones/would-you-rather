import { Component } from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'
import { ImHome3 } from 'react-icons/im'

class LeaderBoard extends Component {
    render() {
        const places = ["first", "second", "third", "fourth", "fifth"]
        const { userStats } = this.props
        return(
            <div className='leaderboard-main'>
        
                <div className='user-stats-container'>
                    <h1> Leaderboard </h1>
                    <ul className='user-stats-list'>
                        {userStats.map((user, index) => (
                            <li className='user-stats-item'>
                                <UserStats 
                                    key={index}
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