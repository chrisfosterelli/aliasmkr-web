
/* Login helper
 */

const auth  = require('./auth')
const axios = require('./axios')

function login(email, password) {
  return axios()
  .post('/token', { email, password })
  .then(res => auth.setToken(res.data.token))
  .then(() => axios().get('/user/self'))
  .then(res => { console.log(res.data); return auth.setUser(res.data.id) })
  .then(() => {
    auth.onChange(true)
    return true
  })
}

module.exports = login
