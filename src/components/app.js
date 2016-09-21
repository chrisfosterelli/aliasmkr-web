
/* App layout
 */

import React from 'react'
import auth from '../auth'
import Header from './Header'
import { Link } from 'react-router'

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

class App extends React.Component {

  render() {
    return (
      <div style={divStyle}>
        <Header/>
        { this.props.isLoggedIn ? (
            <Link style={linkStyle} to="/logout">
              Log out
            </Link>
          ) : '' }
        { this.props.children }
      </div>
    )
  }

}

export default App
