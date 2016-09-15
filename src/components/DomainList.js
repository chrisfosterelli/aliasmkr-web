
/* Domain listings page 
 */

import React from 'react'
import { Link } from 'react-router'

const linkStyle = {
  paddingRight : '30px',
  paddingLeft : '30px'
}

class Domains extends React.Component {

  componentDidMount() {
    this.props.fetchDomains()
  }

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

}

module.exports = Domains
