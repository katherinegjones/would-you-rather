import { Component } from 'react'
import { connect } from 'react-redux'
import { ImCheckmark } from 'react-icons/im'
import { PieChart } from 'react-minimal-pie-chart'

class QuestionStats extends Component {
    render() {
        const { optionOne, optionTwo, numOneVotes, numTwoVotes, selected, num } = this.props
        return(
           <div className='question-stats-container'>
               <h2>Question {num}: </h2>
                    <div className='option-one-stats-container'>
                            {optionOne === selected && (
                                <ImCheckmark className='checkmark'/>
                            )}
                        <h3 className='option-one-stats'>{optionOne}: {numOneVotes} {numOneVotes === 1 ? "vote" : "votes"}</h3>
                    </div>

                    <div className='option-two-stats-container'>
                            {optionTwo === selected && (
                                <ImCheckmark className='checkmark'/>
                            )}
                        <h3 className='option-two-stats'>{optionTwo}: {numTwoVotes} {numTwoVotes === 1 ? "vote" : "votes"}</h3>
                    </div>
                
                <PieChart 
                    data = {[
                        {title: `${optionOne}`, value: numOneVotes, color: '#009999'},
                        {title: `${optionTwo}`, value: numTwoVotes, color: '#cc0066'}
                    ]}
                    style={{ height: '100px' }}
                    label = {({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                    labelStyle = {{
                        fontSize: '15px',
                        fontFamily: 'sans-serif'
                    }}
                />
           </div> 
        )
    }   
}

export default connect()(QuestionStats)