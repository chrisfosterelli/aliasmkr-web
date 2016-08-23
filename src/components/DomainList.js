
/* Domain listings page 
 */

const React       = require('react')
const ReactRouter = require('react-router')
const axios       = require('../axios')
const auth        = require('../auth')

const Link = ReactRouter.Link

const api = 'http://localhost:9999/'

const linkStyle = {
  paddingRight : '30px',
  paddingLeft : '30px'
}

const Domains = React.createClass({

  getInitialState() {
    const domains = []
    return { domains }
  },

  componentDidMount() {
    const user = auth.getUser()
    const params = { user }
    const opts = { params }
    this.req = axios()
    .get('/domain', opts)
    .then(res => {
      const domains = res.data
      this.setState({ domains })
    })
  },

  render() {
    return (
      <div>
        { this.state.domains.map(domain => {
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
