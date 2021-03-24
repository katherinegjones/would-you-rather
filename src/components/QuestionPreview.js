import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../stylesheets/homepage.css'

class QuestionPreview extends Component {

    render(){
        const { author, questionNum, id  }  = this.props
        return(
            <Link to={`/question/${id}`} style={{textDecoration: 'none'}}>
                <div className='question-preview-container'>
                        <h3>Question number {questionNum} by {author}</h3>                   
                </div>
            </Link>
        )
    }
}

function mapStateToProps({ questions }, { id }){
    const questionNum = Object.keys(questions).indexOf(id)
    const author = questions[id].author
    
    return {
        questionNum,
        author
    }


}

export default connect(mapStateToProps)(QuestionPreview)