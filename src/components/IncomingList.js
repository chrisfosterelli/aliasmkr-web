
/* Domain editing page 
 */

import React from 'react'
import { Link } from 'react-router'
import axios from '../axios'

const linkStyle = {
  paddingLeft : '.5em'
}

class IncomingList extends React.Component {

  componentDidMount() {
    const domain = this.props.params.domain
    this.props.fetchAliases(domain)
  }

  render() {
    const aliases = this.props.aliases.items
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

}

export default IncomingList
