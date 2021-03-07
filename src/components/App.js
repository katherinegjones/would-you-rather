import { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading'
import HomePage from './HomePage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './Leaderboard'
import QuestionPage from './QuestionPage'
import Nav from './Nav'
import { handleInitialData } from '../actions/shared'
import { connect } from "react-redux";
import Login from "./Login";


class App extends Component {
    componentDidMount(){
        if (this.props.loading === true)
        this.props.dispatch(handleInitialData())
    }

    
    render() {
        const { authedUser } = this.props
        const PrivateRoute = ({component: Component, ...rest}) =>{
            <Route {...rest} render={(props) =>(
                authedUser 
                ? <Component {...props}/>
                : <Redirect to={{
                    pathname: "/login",
                    state: {from: props.location}                    
                }}/>
            )}/>
        }
        
        return(
            <Router>
                <Fragment>
                    <LoadingBar />
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <PrivateRoute exact path = '/homepage' component={HomePage} />
                        <PrivateRoute exact path='question/:id' component={QuestionPage} />
                        <PrivateRoute exact path='/add' component={NewQuestion} />
                        <PrivateRoute exact path='/leaderboard' component={LeaderBoard}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ users, authedUser }){
    return{
        loading: users.length === 0,
        authedUser
    }
}

export default connect(mapStateToProps)(App)