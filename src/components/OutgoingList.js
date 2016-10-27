
/* Alias editing page 
 */

import React from 'react'
import { Link } from 'react-router'
import axios from '../axios'
import OutgoingAliasCreator from '../containers/OutgoingAliasCreator'
import OutgoingAliasDeleteButton from '../containers/OutgoingAliasDeleteButton'

const linkStyle = {
  paddingLeft : '.5em'
}

class OutgoingList extends React.Component {

  componentDidMount() {
    const alias = this.props.params.alias
    this.props.fetchAlias(alias)
  }

  render() {
    const alias = this.props.alias.item
    const domain = this.props.params.domain
    if (!alias.incoming) return <div></div>
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
              <OutgoingAliasDeleteButton email={outgoing} />
            </div>
          })
        }
        <OutgoingAliasCreator />
      </div>
    )
  }

}

export default OutgoingList
