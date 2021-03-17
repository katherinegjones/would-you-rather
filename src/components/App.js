import { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading'
import HomePage from './HomePage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './Leaderboard'
import QuestionPage from './QuestionPage'
import Login from "./Login";
import Nav from './Nav'
import { handleInitialData } from '../actions/shared.js'
import { connect } from "react-redux";



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
                    <LoadingBar />
                    <Nav />
                    {this.props.loading === true 
                    ? null
                    :<Switch>
                        <Route exact path='/' component={Login} />
                        <PrivateRoute exact path='/homepage' component={HomePage} />
                        <PrivateRoute exact path='/question/:id' component={QuestionPage} />
                        <PrivateRoute exact path='/add' component={NewQuestion} />
                        <PrivateRoute exact path='/leaderboard' component={LeaderBoard}/>
                        <PrivateRoute component={NoMatch} />
                    </Switch>}
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