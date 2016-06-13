
/* Login page 
 */

const React       = require('react')
const ReactRouter = require('react-router')

const Link = ReactRouter.Link

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
  render() {
    return (
      <div>
        <input style={inputStyle} type="text" placeholder="username"/>
        <input style={inputStyle} type="password" placeholder="password"/>
        <div style={divStyle}><Link to="/domains">submit</Link></div>
        <div style={divStyle}><Link to="/">cancel</Link></div>
      </div>
    )
  }
})

module.exports = Login
