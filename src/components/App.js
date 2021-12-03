import React, { Component } from 'react'
import Fragment from 'render-fragment'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
          <Fragment>
            <div className='container'>
              <LoadingBar />
              <Nav />
                {this.props.loading === true 
                ? null 
                : <div>
                  <Routes>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/tweet/:id' component={TweetPage} />
                    <Route path='/new' component={NewTweet} />
                    </Routes>
                  </div>}
            </div>
          </Fragment>
      </Router>
      
      
     
    )
  }
}

// loading prop is used to render Dashboard when initial data is loaded
function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)