import { Component } from 'react'
import { connect } from 'react-redux'
import { ImCheckMark } from 'react-icons/im'
import { PieChart } from 'react-minimal-pie-chart'

class QuestionStats extends Component {
    render() {
        const { optionOne, optionTwo, selected, num } = this.props
        return(
           <div className='question-stats-container'>
               <h2>Question {num}:</h2>
               {[optionOne, optionTwo].map((item) =>
                    <div>
                        {item.name === selected && (
                            <ImCheckMark className='checkmark'/>
                        )}
                        <h3>"{item.name}: {item.numVotes}"</h3>
                    </div>
               )}
                <PieChart 
                    data = {[
                        {title: `${optionOne.name}`, value: optionOne.numVotes, color: '#009999'},
                        {title: `${optionTwo.name}`, value: optionTwo.numVotes, color: '#cc0066'}
                    ]}
                />
           </div> 
        )
    }   
}

export default connect()(QuestionStats)