
/* Alias Reducer
 */

import * as types from '../constants/actionTypes'

const initial = {
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
  }
  return state
}

export default alias
