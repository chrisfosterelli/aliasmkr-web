
/* OutgoingAliasCreator Container
 * Container to create an outgoing alias address
 */

import { connect } from 'react-redux'
import { createOutgoing } from '../actions/outgoing'
import AliasCreator from '../components/AliasCreator'

function mapDispatchToProps(dispatch) {
  return {
    createAlias: (alias, email) => {
      dispatch(createOutgoing(alias, email))
    }
  }
}

function mapStateToProps(state) {
  const alias = state.alias.item ? state.alias.item.id : ''
  const isCreating = state.alias.isCreating
  return { alias, isCreating }
}

export default connect(mapStateToProps, mapDispatchToProps)(AliasCreator)
