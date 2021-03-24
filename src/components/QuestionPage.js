import { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import '../stylesheets/questionpage.css'
import '../stylesheets/index.css'

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
        console.log("Authed user upon answering question: ", authedUser)
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

        const selectedStyle = {
            backgroundColor: '#cc0066',
            color: 'white',
            boxShadow: 'none'
        }

        const unStyle = {
            color: '#cc0066',
            boxShadow: '0px 0px 4px #cc0066'
        }

        return(
            <div className='main'>
                    <h1>Would You Rather . . . </h1>
                    <div className='answer-option' style={selected === 'optionOne' ? selectedStyle : unStyle} onClick={(event) => this.handleSelect(event, 'optionOne')}>
                        <h2>{optionOne}</h2>
                    </div>
                    
                    <h3>or</h3>
                    <div className='answer-option' style={selected === 'optionTwo' ? selectedStyle : unStyle} onClick={(event) => this.handleSelect(event, 'optionTwo')}>
                        <h2>{optionTwo}</h2>
                    </div>
                    <h3>Question by {author}</h3>
                    <img className='avatar' src={picture} alt='avatar of author'></img>
                    <button
                    className='submit-button' 
                    disabled={selected === ''} 
                    onClick={this.handleSubmit}>
                        <strong>Submit Answer</strong>
                        
                    </button>
                    
                
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