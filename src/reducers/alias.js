
/* Alias Reducer
 */

import _ from 'lodash'
import * as types from '../constants/actionTypes'

const initial = {
  isCreating : false,
  isFetching : false,
  item : {}
}

function alias(state = initial, action) {
  switch (action.type) {
    case types.FETCH_ALIAS: {
      const isFetching = true
      const stateChange = { isFetching }
      return Object.assign({}, state, stateChange)
    }
    case types.FETCH_ALIAS_SUCCESS: {
      const isFetching = false
      const item = action.payload
      const stateChange = { item, isFetching }
      return Object.assign({}, state, stateChange)
    }
    case types.FETCH_ALIAS_FAILURE: {
      alert('Unhandled error case')
    }
    case types.CREATE_OUTGOING: {
      const isCreating = true
      const stateChange = { isCreating }
      return Object.assign({}, state, stateChange)
    }
    case types.CREATE_OUTGOING_SUCCESS: {
      const isCreating = false
      const item = _.clone(state.item)
      item.outgoing = item.outgoing.concat(action.payload)
      const stateChange = { item, isCreating }
      return Object.assign({}, state, stateChange)
    }
    case types.CREATE_OUTGOING_FAILURE: {
      alert('Unhandled error case')
    }
  }
  return state
}

export default alias
