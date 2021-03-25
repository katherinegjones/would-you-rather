import { Component } from 'react'
import { connect } from 'react-redux'
import { ImCheckmark } from 'react-icons/im'
import { PieChart } from 'react-minimal-pie-chart'

class QuestionStats extends Component {
    render() {
        const { optionOne, optionTwo, numOneVotes, numTwoVotes, selected, num } = this.props
        const dataMock = [
            {title: `${optionOne}`, value: numOneVotes, color: '#009999'},
            {title: `${optionTwo}`, value: numTwoVotes, color: '#cc0066'}
        ]
        return(
           <div className='question-stats-container'>
               <h2>Question {num}: </h2>
                    <div className='option-stats-container'>
                            
                        <h3 className='option-one-stats'><span>{optionOne === selected && (
                                <ImCheckmark className='checkmark'/>
                            )}</span>{optionOne}: {numOneVotes} {numOneVotes === 1 ? "vote" : "votes"}</h3>
                    </div>

                    <div className='option-stats-container'>
                            
                        <h3 className='option-two-stats'><span>{optionTwo === selected && (
                                <ImCheckmark className='checkmark'/>
                            )}</span>{optionTwo}: {numTwoVotes} {numTwoVotes === 1 ? "vote" : "votes"}</h3>
                    </div>
                
                <PieChart 
                    data = {dataMock}
                    style={{ height: '125px' }}
                    label = {({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                    labelStyle = {(index) => ({
                        fill: dataMock[index].value === 0 ? dataMock[index].color : 'white',
                        fontSize: '20px',
                        fontFamily: 'sans-serif'
                    })}
                />
           </div> 
        )
    }   
}

export default connect()(QuestionStats)