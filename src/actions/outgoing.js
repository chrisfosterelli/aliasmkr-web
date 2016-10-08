
/* Outgoing Actions
 */

import axios from '../axios'
import * as types from '../constants/actionTypes'

export function requestCreateOutgoing() {
  const type = types.CREATE_OUTGOING
  return { type }
}

export function receiveCreateOutgoing(outgoing) {
  const payload = outgoing
  const type = types.CREATE_OUTGOING_SUCCESS
  return { type, payload }
}

export function failCreateOutgoing(err) {
  const error = true
  const payload = err
  const type = types.CREATE_OUTGOING_FAILURE
  return { type, payload, error }
}

export function createOutgoing(alias, email) {
  return dispatch => {
    dispatch(requestCreateOutgoing())
    const url = `/alias/${alias}/outgoing`
    const headers = { 'Content-Type' : 'text/plain' }
    const options = { headers }
    axios()
    .post(url, email, options)
    .then(res => {
      const alias = res.data
      dispatch(receiveCreateOutgoing(alias))
    })
    .catch(err => {
      dispatch(failCreateOutgoing(err))
    })
  }
}
