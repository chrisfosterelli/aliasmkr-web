
/* Aliases Reducer
 */

import * as types from '../constants/actionTypes'

const initial = {
  isFetching : false,
  items : []
}

function aliases(state = initial, action) {
  switch (action.type) {
    case types.FETCH_ALIASES: {
      const isFetching = true
      const stateChange = { isFetching }
      return Object.assign({}, state, stateChange)
    }
    case types.FETCH_ALIASES_SUCCESS: {
      const isFetching = false
      const items = action.payload
      const stateChange = { items, isFetching }
      return Object.assign({}, state, stateChange)
    }
    case types.FETCH_ALIASES_FAILURE: {
      alert('Unhandled error case')
    }
  }
  return state
}

export default aliases
