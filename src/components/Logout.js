
/* Logout
 */

import React from 'react'
import { withRouter } from 'react-router'
import auth from '../auth'

class Logout extends React.Component {

  componentDidMount() {
    auth.clearToken()
    this.props.router.replace('/')
  }

  render() {
    return (
      <div></div>
    )
  }

}

export default withRouter(Logout)
