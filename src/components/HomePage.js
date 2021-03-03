import { Component } from 'react'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'
import Answered from './Answered'
import Nav from './Nav'
import { ImBlocked } from 'react-icons/im'

class HomePage extends Component {
    state = {
        selected: 'unanswered'
    }
    handleSelected = (e) => {
        e.preventDefault()

        const selected = e.target.innerHTML.split(' ')[0].toLower()

        this.setState(() =>({
            selected
        }))

    }
    render(){
       const { selected } = this.state
       return (
           <div className='homepage-main'>
             <Nav />  
            <div className='answered-or-unanswered'>
                <div className='homepage-tabs'>
                    <button 
                        className='tab' 
                        id={selected === 'unanswered' 
                        ? 'selected-tab'
                        : null
                        }
                        onClick={this.handleSelected}
                        >Unanswered Questions</button>
                    <button 
                        className='tab' 
                        id={selected === 'answered' 
                        ? 'selected-tab'
                        : null
                        }
                        onClick={this.handleSelected}
                        >Answered Questions</button>
                </div>
                <Unanswered 
                    display={selected === 'unanswered'
                    ? 'block'
                    : 'none'
                }
                />
                <Answered 
                    display={selected === 'answered'
                    ? 'block'
                    : 'none'
                    }
                />
            </div>
           </div>
       )
    }
   
}

export default connect()(HomePage)