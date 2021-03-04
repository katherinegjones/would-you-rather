import { Component } from 'react'
import { connect } from 'react-redux'
import { ImHome3 } from 'react-icons/im'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
 
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

        dispatch(handleAddQuestion({ optionOne, optionTwo }))

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
            <div className='new-question-main'>
                <div className='new-question-header'>
                    <h1>New Question Form</h1>
                    < ImHome3 />
                </div>
                <form className='new-question-form' onSubmit={this.handleSubmit}>
                    <input
                        placeholder='Type your first option here'
                        value={optionOne}
                        onChange={(event)=>this.handleChange(event, 'optionOne')}
                        className='new-option-input'
                    />

                    <input
                        placeholder='Type your second option here'
                        value={optionTwo}
                        onChange={(event)=>this.handleChange(event, 'optionTwo')}
                        className='new-option-input'
                    />
                    <button 
                        className='new-question-submit'
                        disabled={optionOne === '' || optionTwo === ''}
                        type='submit'
                        >Submit New Question</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)