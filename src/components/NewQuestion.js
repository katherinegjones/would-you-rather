import { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import '../stylesheets/newquestion.css'
import '../stylesheets/index.css'
 
class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (e, option) => {
        this.setState(() => ({
            [option]: e.target.value
        }))
        
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }))
    }
    render() {
        const { optionOne, optionTwo, toHome } = this.state

        

        if (toHome === true){
            return <Redirect to='/' />
        }
        return(
            <div className='main new-question-main'>
                    <h1>New Question Form</h1>
                <form className='main new-question-form' onSubmit={this.handleSubmit}>
                    <input
                        placeholder='Type your first option here'
                        value={optionOne}
                        onChange={(event)=>this.handleChange(event, 'optionOne')}
                        className='new-option-input'
                        maxLength={100}
                    />
{optionOne.length > 65 && (
    <div className='chars-remaining'>{100 - optionOne.length} characters left</div>
)}
                    <input
                        placeholder='Type your second option here'
                        value={optionTwo}
                        onChange={(event)=>this.handleChange(event, 'optionTwo')}
                        className='new-option-input'
                        maxLength={100}
                    />
                    {optionTwo.length > 65 && (
    <div className='chars-remaining'>{100 - optionTwo.length} characters left</div>
)}
                    <button 
                        className='submit-button'
                        disabled={optionOne === '' || optionTwo === ''}
                        type='submit'
                        >Submit New Question</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)