
/* Alias editing page 
 */

const React       = require('react')
const ReactRouter = require('react-router')
const axios       = require('../axios')

const Link = ReactRouter.Link

const linkStyle = {
  paddingLeft : '.5em'
}

const AliasEditor = React.createClass({

  getInitialState() {
    const outgoing = []
    const alias = { outgoing }
    return { alias }
  },

  componentDidMount() {
    const alias = this.props.params.alias
    const params = { alias }
    const opts = { params }
    this.req = axios()
    .get('/alias/' + alias)
    .then(res => {
      const alias = res.data
      this.setState({ alias })
    })
  },

  render() {
    const alias = this.state.alias
    const domain = this.props.params.domain
    return (
      <div>
        you're configuring {domain}
        <Link style={linkStyle} to={'/domains/' + domain}>
          (go back)
        </Link>
        <div>{alias.incoming}</div>
        { alias.outgoing.map(outgoing => {
            return <div key={outgoing}>
              {outgoing}
            </div>
          })
        }
      </div>
    )
  }

})

module.exports = AliasEditor
