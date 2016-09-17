
/* Alias OutgoingList Container
 * Outgoing emails for a particular alias
 */

import { connect } from 'react-redux'
import { fetchAlias } from '../actions/alias'
import OutgoingList from '../components/OutgoingList'

function mapDispatchToProps(dispatch) {
  return {
    fetchAlias: alias => {
      dispatch(fetchAlias(alias))
    }
  }
}

function mapStateToProps(state) {
  const alias = state.alias
  return { alias }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutgoingList)
