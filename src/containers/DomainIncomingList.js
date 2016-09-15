
/* Domain IncomingList Container
 * Incoming aliases for a particular domain
 */

import { connect } from 'react-redux'
import IncomingLIst from '../components/IncomingList'
import { fetchAliases } from '../actions/aliases'

function mapDispatchToProps(dispatch) {
  return {
    fetchAliases: domain => {
      dispatch(fetchAliases(domain))
    }
  }
}

function mapStateToProps(state) {
  const aliases = state.aliases
  return { aliases }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomingLIst)
