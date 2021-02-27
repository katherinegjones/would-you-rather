import { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class Unanswered extends Component {
    render() {
        return(
            <div className='unanswered-questions-container'>
                <h1> Unanswered Questions (click to answer): </h1>
                <ul className='unanswered-questions-list'>
                    {this.props.unansweredIDs.map((id) =>(
                        <li key={id}>
                            <QuestionPreview id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
    const questionIDs = Object.keys(questions)
    const userQuestions = authedUser.questions
    const unanswered = questionIDs.filter((elem) => userQuestions.indexOf(elem) === -1);
    return {
        unansweredIDs: unanswered 
    }
}

export default connect(mapStateToProps)(Unanswered)