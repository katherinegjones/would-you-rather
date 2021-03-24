import { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'
import '../stylesheets/homepage.css'
import '../stylesheets/index.css'

class Unanswered extends Component {
    render() {
        const { unansweredIDs } = this.props
        return(
            <div className='main unanswered-questions-container'>
                <h1> Unanswered Questions (click to answer): </h1>
                {unansweredIDs.length > 0 
                ? <ul className='unanswered-questions-list'>
                    {this.props.unansweredIDs.map((id) =>(
                        <li key={id}>
                            <QuestionPreview id={id} />
                        </li>
                    ))}
                </ul>
                : <h2><em>Looks like you've answered all the questions!</em></h2>}
            </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser, users }) {
    const questionIDs = Object.keys(questions)
    const userAnswers = Object.keys(users[authedUser].answers)
    const unanswered = questionIDs.filter((elem) => userAnswers.indexOf(elem) === -1);
    return {
        unansweredIDs: unanswered 
    }
}

export default connect(mapStateToProps)(Unanswered)