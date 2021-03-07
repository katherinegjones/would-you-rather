import { Component } from 'react'
import { connect } from 'react-redux'
import { ImHome3 } from 'react-icons/im'
import { handleAnswerQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
    state = {
        selected: '',
        toHome: false
    }

    handleSelect = (e) => {
        if(e.target.tagName === 'H2'){
            const selected = e.target.innerHTML

            this.setState(() => ({
                selected
            }))
        }
    }

    handleSubmit = (e) => {
        const { dispatch, authed, qid } = this.props

        const selected = this.state
        dispatch(handleAnswerQuestion({ authed, qid, selected}))

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
                <div className='unanswered-question-header'>
                    <h1>Would You Rather . . . </h1>
                    <ImHome3 className='home-icon'/>
                </div>
                <div className='unanswered-sub-container'>
                    <div className='answer-option' onClick={this.handleSelect}>
                        <h2>{optionOne}</h2>
                    </div>
                    
                    <p>or</p>
                    <div className='answer-option' onClick={this.handleSelect}>
                        <h2>{optionTwo}</h2>
                    </div>
                    <h3>Question by {author}</h3>
                    <img className='avatar' src={picture} alt='avatar of author'></img>
                    <button disabled={selected === ''} onClick={this.handleSubmit}></button>
                </div>
                
            </div>
        ) 
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params

    const curQuestion = questions[id]

    const avatar = users.find(elem => elem.id === curQuestion.author).avatar

    return {
        qid: curQuestion.id,
        optionOne: curQuestion.optionOne.text,
        optionTwo: curQuestion.optionTwo.text,
        author: curQuestion.author,
        picture: avatar,
        authed: authedUser
    }
}

export default connect(mapStateToProps)(QuestionPage)