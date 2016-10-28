
/* Axios
 * Axios wrapper instance
 */

const axios = require('axios')
const auth  = require('./auth')

function getInstance() {
  const baseURL = 'https://api.aliasmkr.com'
  const Authorization = 'Bearer ' + auth.getToken()
  const headers = auth.hasToken() ? { Authorization } : {}
  return axios.create({ baseURL, headers })
}

module.exports = getInstance
