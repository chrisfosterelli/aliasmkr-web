
/* Alias Actions
 */

import axios from '../axios'
import * as types from '../constants/actionTypes'

export function requestAliases() {
  const type = types.FETCH_ALIASES
  return { type }
}

export function receiveAliases(aliases) {
  const payload = aliases
  const type = types.FETCH_ALIASES_SUCCESS
  return { type, payload }
}

export function failAliases(err) {
  const error = true
  const payload = err
  const type = types.FETCH_DOMAINS_FAILURE
  return { type, payload, error }
}

export function fetchAliases(domain) {
  return dispatch => {
    const params = { domain }
    const opts = { params }
    dispatch(requestAliases())
    axios().get('/alias', opts)
    .then(res => {
      const aliases = res.data
      dispatch(receiveAliases(aliases))
    })
    .catch(err => {
      dispatch(failAliases(err))
    })
  }
}
