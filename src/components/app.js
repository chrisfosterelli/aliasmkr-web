
/* Main container
 */

const React       = require('react')
const ReactRouter = require('react-router')
const Header      = require('./header')

const divStyle = {
  height : '75%',
  display : 'flex',
  alignItems : 'center',
  flexDirection : 'column',
  justifyContent : 'center'
}

const Domains = React.createClass({
  render() {
    return (
      <div style={divStyle}>
        <Header/>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Domains
