
/* Main App
 */

import React from 'react'

  getInitialState() {
    const loggedIn = auth.hasToken()
    return { loggedIn }
  },

  updateAuth(loggedIn) {
    this.setState({ loggedIn })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
  },

