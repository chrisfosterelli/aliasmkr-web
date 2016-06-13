
/* Domain listings page 
 */

const React       = require('react')
const ReactRouter = require('react-router')

const Link = ReactRouter.Link

const linkStyle = {
  paddingLeft : '30px',
  paddingRight : '30px'
}

const Domains = React.createClass({
  render() {
    return (
      <div>
        <Link style={linkStyle} to="/domains/trucsclub.ca">
          trucsclub.ca
        </Link>
        <Link style={linkStyle} to="/domains/fosterelli.co">
          fosterelli.co
        </Link>
        <Link style={linkStyle} to="/domains/johndep.com">
          johndep.com
        </Link>
      </div>
    )
  }
})

module.exports = Domains
