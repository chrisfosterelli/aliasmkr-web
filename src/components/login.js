
/* Login page 
 */

const React       = require('react')
const ReactRouter = require('react-router')
const login       = require('../login')

const Link = ReactRouter.Link
const withRouter = ReactRouter.withRouter

const inputStyle = {
  border : '1px solid black',
  padding : '10px',
  display : 'block',
  marginBottom : '10px',
  width : '20em'
}

const divStyle = {
  textAlign : 'center',
  paddingTop : '10px'
}

const Login = React.createClass({

  getInitialState() {
    const error = false
    return { error }
  },

  handleSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.value
    const password = this.refs.password.value
    login(email, password)
    .then(loggedIn => {
      const error = true
      if (!loggedIn) return this.setState({ error })
      this.props.router.replace('/domains')
    })
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input style={inputStyle} ref="email" type="text" placeholder="email"/>
        <input style={inputStyle} ref="password" type="password" placeholder="password"/>
        <div style={divStyle}><a onClick={this.handleSubmit}>submit</a></div>
        <div style={divStyle}><Link to="/">cancel</Link></div>
        {this.state.error && (<p>Bad login information</p>)}
      </form>
    )
  }

})

module.exports = withRouter(Login)
