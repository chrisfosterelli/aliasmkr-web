
/* Main App
 */

import { connect } from 'react-redux'
import App from '../components/App'

function mapStateToProps(state) {
  const isLoggedIn = state.user.isLoggedIn
  return { isLoggedIn }
}

export default connect(mapStateToProps)(App)

/*
import React from 'react'

class MainApp extends React.Component {

  getInitialState() {
    const loggedIn = auth.hasToken()
    return { loggedIn }
  },

  updateAuth(loggedIn) {
    this.setState({ loggedIn })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
  }

}*/
