
/* Alias Actions
 */

import axios from '../axios'
import * as types from '../constants/actionTypes'

export function requestAlias() {
  const type = types.FETCH_ALIAS
  return { type }
}

export function receiveAlias(alias) {
  const payload = alias
  const type = types.FETCH_ALIAS_SUCCESS
  return { type, payload }
}

export function failAlias(err) {
  const error = true
  const payload = err
  const type = types.FETCH_ALIAS_FAILURE
  return { type, payload, error }
}

export function fetchAlias(alias) {
  return dispatch => {
    dispatch(requestAlias())
    axios().get('/alias/' + alias)
    .then(res => {
      const alias = res.data
      dispatch(receiveAlias(alias))
    })
    .catch(err => {
      dispatch(failAlias(err))
    })
  }
}
