
/* Domain listings page 
 */

const React       = require('react')
const ReactRouter = require('react-router')

const Link = ReactRouter.Link

const linkStyle = {
  paddingRight : '30px',
  paddingLeft : '30px'
}

const Domains = React.createClass({

  componentDidMount() {
    this.props.fetchDomains()
  },

  render() {
    const domains = this.props.domains.items
    return (
      <div>
        { domains.map(domain => {
            return <Link key={domain.id}
              style={linkStyle}
              to={'/domains/' + domain.id}>
              {domain.name}
            </Link>
          })
        }
      </div>
    )
  }

})

module.exports = Domains
