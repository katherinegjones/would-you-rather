import { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import  LoadingBar  from 'react-redux-loading-bar'
import HomePage from './HomePage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './Leaderboard'
import QuestionPage from './QuestionPage'
import Login from "./Login";
import AppNav from './AppNav'
import { handleInitialData } from '../actions/shared.js'
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from "./NewUser";



class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
        
    }

    
    render() {
        const { authedUser } = this.props
        // console.log("Authed user: ", authedUser)
        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render={(props) =>(
                authedUser !== null 
                ? <Component {...props}/>
                : <Redirect to={{
                    pathname: "/",
                    state: {from: props.location}                    
                }}/>
            )}/>
        )
        
        const NoMatch = ({ location }) => (
            <h3>No match for <code>{location.pathname}</code></h3>
        )

        return(
            <Router>
                <Fragment>
                    <div className='app-main'>
                    <LoadingBar />
                        <AppNav />
                        {this.props.loading === true 
                        ? null
                        :<Switch>
                            <Route exact path='/' component={Login} />
                            <Route exact path='/new' component={NewUser} />
                            <PrivateRoute exact path='/homepage' component={HomePage} />
                            <PrivateRoute exact path='/question/:id' component={QuestionPage} />
                            <PrivateRoute exact path='/add' component={NewQuestion} />
                            <PrivateRoute exact path='/leaderboard' component={LeaderBoard}/>
                            
                            <PrivateRoute component={NoMatch} />
                        </Switch>}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ users, authedUser }){
    return{
        loading: Object.keys(users).length === 0,
        authedUser
    }
}

export default connect(mapStateToProps)(App)