
/* Domain Actions
 */

import auth from '../auth'
import axios from '../axios'
import * as types from '../constants/actionTypes'

export function requestDomains() {
  const type = types.FETCH_DOMAINS
  return { type }
}

export function receiveDomains(entries) {
  const payload = entries
  const type = types.FETCH_DOMAINS_SUCCESS
  return { type, payload }
}

export function failDomains(err) {
  const error = true
  const payload = err
  const type = types.FETCH_DOMAINS_FAILURE
  return { type, payload, error }
}

export function fetchDomains() {
  return dispatch => {
    const user = auth.getUser()
    const params = { user }
    const opts = { params }
    dispatch(requestDomains())
    axios().get('/domain', opts)
    .then(res => {
      const domains = res.data
      console.log('domains!!')
      dispatch(receiveDomains(domains))
    })
    .catch(err => {
      dispatch(failDomains(err))
    })
  }
}
