
/* Domain editing page 
 */

const React       = require('react')
const ReactRouter = require('react-router')

const Link = ReactRouter.Link

const linkStyle = {
  paddingLeft : '.5em'
}

const Domains = React.createClass({
  render() {
    return (
      <div>
        you're configuring trucsclub.ca 
        <Link style={linkStyle} to="/domains">(go back)</Link>
      </div>
    )
  }
})

module.exports = Domains
