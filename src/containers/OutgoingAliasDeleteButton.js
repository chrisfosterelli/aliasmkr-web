
/* OutgoingAliasDeleteButton Container
 * Container to delete an outgoing alias
 */

import { connect } from 'react-redux'
import { deleteOutgoing } from '../actions/outgoing'
import DeleteButton from '../components/DeleteButton'

function mapDispatchToProps(dispatch) {
  return {
    deleteAlias: (alias, email) => {
      dispatch(deleteOutgoing(alias, email))
    }
  }
}

function mapStateToProps(state) {
  const alias = state.alias.item ? state.alias.item.id : ''
  return { alias }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)
