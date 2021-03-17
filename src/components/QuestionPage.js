import { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
    state = {
        selected: '',
        toHome: false
    }

    handleSelect = (e, option) => {
        if(e.target.tagName === 'H2'){
            const selected = option

            this.setState(() => ({
                selected
            }))
        }
    }

    handleSubmit = (e) => {
        const { dispatch, authedUser, qid } = this.props

        const { selected } = this.state
        console.log("Option chosen: ", selected)
        dispatch(handleAnswerQuestion({ authedUser, qid: qid, answer: selected}))

        this.setState(() => ({
            selected: '',
            toHome: true
        }))
    }

    render() {
        const { selected, toHome } = this.state
        const { optionOne, optionTwo, author, picture } = this.props

        if (toHome === true){
            return <Redirect to = '/homepage' />
        }

        return(
            <div className='unanswered-question-main'>
                    <h1>Would You Rather . . . </h1>
                    <div className='answer-option' onClick={(event) => this.handleSelect(event, 'optionOne')}>
                        <h2>{optionOne}</h2>
                    </div>
                    
                    <p>or</p>
                    <div className='answer-option' onClick={(event) => this.handleSelect(event, 'optionTwo')}>
                        <h2>{optionTwo}</h2>
                    </div>
                    <h3>Question by {author}</h3>
                    <img className='avatar' src={picture} alt='avatar of author'></img>
                    <button disabled={selected === ''} onClick={this.handleSubmit}>Submit Answer</button>
                    
                
            </div>
        ) 
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params

    const curQuestion = questions[id]

    const curAuthor = Object.keys(users).find(elem => elem === curQuestion.author)

    const avatar = users[curAuthor].avatarURL

    return {
        qid: curQuestion.id,
        optionOne: curQuestion.optionOne.text,
        optionTwo: curQuestion.optionTwo.text,
        author: curQuestion.author,
        picture: avatar,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionPage)