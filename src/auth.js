
/* Auth manager
 */

const api = 'http://localhost:9999/'

function setToken(token) {
  localStorage.token = token
}

function getToken() {
  return localStorage.token
}

function hasToken() {
  return !!localStorage.token
}

function clearToken() {
  delete localStorage.token
  this.onChange(false, null)
}

function setUser(user) {
  localStorage.user = user
}

function getUser() {
  return localStorage.user
}

function onChange() {}

module.exports = { 
  setToken, getToken, hasToken, clearToken, setUser, getUser, onChange
}
