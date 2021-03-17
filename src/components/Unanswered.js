import { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class Unanswered extends Component {
    render() {
        const divStyle = {
            display: this.props.display
        }
        return(
            <div className='unanswered-questions-container' style={divStyle}>
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

function mapStateToProps ({ questions, authedUser, users }) {
    const questionIDs = Object.keys(questions)
    const userAnswers = Object.keys(users[authedUser].answers)
    const unanswered = questionIDs.filter((elem) => userAnswers.indexOf(elem) === -1);
    return {
        unansweredIDs: unanswered 
    }
}

export default connect(mapStateToProps)(Unanswered)