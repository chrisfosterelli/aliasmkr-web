
/* Main container
 */

const React       = require('react')
const ReactRouter = require('react-router')
const auth        = require('../auth')
const Header      = require('./header')

const Link = ReactRouter.Link

const divStyle = {
  height : '75%',
  display : 'flex',
  alignItems : 'center',
  flexDirection : 'column',
  justifyContent : 'center'
}

const linkStyle = {
  position : 'absolute',
  right : '15px',
  top : '5px'
}

const App = React.createClass({
  
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

  render() {
    return (
      <div style={divStyle}>
        <Header/>
        { this.state.loggedIn ? (
            <Link style={linkStyle} to="/logout">
              Log out
            </Link>
          ) : '' }
        { this.props.children }
      </div>
    )
  }

})

module.exports = App
