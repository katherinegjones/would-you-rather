import { Component } from 'react'
import { connect } from 'react-redux'
import QuestionStats from './QuestionStats'
import { ImCheckmark } from 'react-icons/im'

class Answered extends Component {
    render(){
        const { questionStats } = this.props
        const divStyle = {
            display: this.props.display
        }
        return(
            <div className='answered-questions-main' style={divStyle}>
                <div className='checkmark-explanation'>
                    <ImCheckmark />
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

function mapStateToProps({questions, authedUser, users }){
    const answered = Object.keys(users[authedUser].answers)

    const stats = answered.map((item) => {
        return {
            optionOne: questions[item].optionOne,
            optionTwo: questions[item].optionTwo,
            selected: users[authedUser].answers[item] === "optionOne" 
            ? questions[item].optionOne.text
            : questions[item].optionTwo.text  
        }
    })
    return {
        questionStats: stats
    }
}

export default connect(mapStateToProps)(Answered)