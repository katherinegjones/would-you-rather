import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionPreview extends Component {
    handleOnClick = (e, id) => {
        e.preventDefault()

        this.props.history.push(`question/${id}`)
    }

    render(){
        const { author, questionNum, id  }  = this.props
        return(
            <Link to={`/question/${id}`}>
                <div className='question-preview-container'>
                    <button className='question-preview-button' onClick={(e) => this.handleOnClick(e, id)}>
                        Question number {questionNum} by {author}
                    </button>
                    
                </div>
            </Link>
        )
    }
}

function mapStateToProps({ questions }, { id }){
    const questionNum = questions.indexOf(id)
    const author = questions[id].author
    
    return {
        questionNum,
        author
    }


}

export default connect(mapStateToProps)(QuestionPreview)