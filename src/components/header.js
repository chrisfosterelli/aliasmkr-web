
/* Title header
 */

const React = require('react')

const divStyle = {
  textAlign : 'center'
}

const h1Style = {
  fontSize : 41,
  margin : 0
}

const h3Style = {
  fontWeight : 'normal',
  marginBottom : 50,
  marginRight : 0,
  marginLeft : 0,
  marginTop : 0
}

const Header = React.createClass({
  render() {
    return (
      <div style={divStyle}>
        <h1 style={h1Style}>
          Aliasmkr
        </h1>
        <h3 style={h3Style}>
          email aliases. simple.
        </h3>
      </div>
    )
  }
})

module.exports = Header
