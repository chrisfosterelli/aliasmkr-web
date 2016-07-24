
/* Domain editing page 
 */

const React       = require('react')
const ReactRouter = require('react-router')
const AliasEditor = require('./aliasEditor')
const axios       = require('../axios')

const Link = ReactRouter.Link

const linkStyle = {
  paddingLeft : '.5em'
}

const Domain = React.createClass({

  getInitialState() {
    const aliases = []
    return { aliases }
  },

  componentDidMount() {
    const domain = this.props.params.domain
    const params = { domain }
    const opts = { params }
    this.req = axios()
    .get('/alias', opts)
    .then(res => {
      const aliases = res.data
      this.setState({ aliases })
    })
  },

  render() {
    const aliases = this.state.aliases
    const domain = this.props.params.domain
    return (
      <div>
        you're configuring {this.props.params.domain}
        <Link style={linkStyle} to="/domains">(go back)</Link>
        { aliases.map(alias => {
            return <div key={alias.id}>
              <Link to={'/domains/' + domain + '/aliases/' + alias.id}>
                {alias.incoming}
              </Link>
              - {alias.outgoing.length} destinations
            </div>
          })
        }
      </div>
    )
  }

})

module.exports = Domain
