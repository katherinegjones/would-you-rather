import { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends Component {
    handleOnClick = (e, id) => {
        e.preventDefault()

        this.props.history.push(`question/${id}`)
    }

    render(){
        const { author, questionNum, id  }  = this.props
        return(
            <div className='question-preview-container'>
                <button className='question-preview-button' onClick={(e) => this.handleOnClick(e, id)}>
                    Question number {questionNum} by {author}
                </button>
                 
            </div>
        )
    }
}

function mapStateToProps({ questions }, { id }){
    const questionNum = questions.indexOf(id)
    
    return questionNum


}

export default connect(mapStateToProps)(QuestionPreview)