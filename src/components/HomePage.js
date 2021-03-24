import { Component } from 'react'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'
import Answered from './Answered'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class HomePage extends Component {
    
    render(){
       
       return (
           <Tabs defaultActiveKey='unanswered' id='homepage-tabs'>
               <Tab eventKey='unanswered' title='Unanswered'>
                   <Unanswered />
               </Tab>
               <Tab eventKey='answered' title='Answered'>
                   <Answered />
               </Tab>
           </Tabs>
          
       )
    }
   
}

export default connect()(HomePage)