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
                <div className='leaderboard-header'>
                    <h1>Leaderboard</h1>    
                        <ImHome3 className='home-icon'/>
                </div>
                <div className='user-stats-container'>
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
                                    numQuestions={userStats.numAsked}
                                    numAnswers={userStats.numAnswered}
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
    const stats = users.map((user) => {
        return {
            username: user.name,
            numAnswered: Object.entries(user.answers).length,
            numAsked: users.questions.length
        }
    })

    return {
        userStats: stats.sort((a, b) => stats[a].numAnswered - stats[b.numAnswered])
    }
}

export default connect(mapStateToProps)(LeaderBoard)