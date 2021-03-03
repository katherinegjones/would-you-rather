import { Component } from 'react'
import { connect } from 'react-redux'
import QuestionStats from './QuestionStats'
import { ImCheckMark } from 'react-icons/im'

class Answered extends Component {
    render(){
        const { questionStats } = this.props
        return(
            <div className='answered-questions-main'>
                <div className='checkmark-explanation'>
                    <ImCheckMark />
                    <h3>= Your chosen answer</h3>
                </div>
                <div className='answered-question-container'>
                    {questionStats.map((item, index) =>(
                        <div>
                            <QuestionStats 
                                id={index}
                                num = {index + 1}
                                optionOne={item.optionOne.text}
                                numOneVotes={item.optionOne.votes.length}
                                optionTwo={item.optionTwo.text}
                                numTwoVotes={item.optionTwo.votes.length}
                                selected={item.selected}
                            />
                        </div>    
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser }){
    const answered = Object.keys(authedUser.answers)

    const stats = answered.map((item) => {
        return {
            optionOne: questions[item].optionOne,
            optionTwo: questions[item].optionTwo,
            selected: authedUser.answers[item] === "optionOne" 
            ? questions[item].optionOne.text
            : questions[item].optionTwo.text  
        }
    })
    return {
        questionStats: stats
    }
}

export default connect(mapStateToProps)(Answered)