
/* Logout
 */

const React       = require('react')
const ReactRouter = require('react-router')
const auth        = require('../auth')

const withRouter = ReactRouter.withRouter

const Logout = React.createClass({

  componentDidMount() {
    auth.clearToken()
    this.props.router.replace('/')
  },

  render() {
    return (
      <div></div>
    )
  }

})

module.exports = withRouter(Logout)
