
/* Login page 
 */

import React from 'react'
import { Link, withRouter } from 'react-router'
import login from '../login'

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

class Login extends React.Component {

  constructor(props) {
    super(props)
    const error = false
    this.state = { error }
  }

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
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input 
          style={inputStyle}
          ref="email"
          type="text"
          placeholder="email" />
        <input 
          style={inputStyle}
          ref="password"
          type="password"
          placeholder="password" />
        <div style={divStyle}>
          <input type="submit" value="submit" />
        </div>
        <div style={divStyle}>
          <Link to="/">cancel</Link>
        </div>
        {this.state.error &&
          <p>Bad login information</p>
        }
      </form>
    )
  }

}

export default withRouter(Login)
