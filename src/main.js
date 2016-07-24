
/* Main application entry point
 */

const React       = require('react')
const ReactDOM    = require('react-dom')
const ReactRouter = require('react-router')
const App         = require('./components/app')
const Home        = require('./components/home')
const Login       = require('./components/login')
const Logout      = require('./components/logout')
const Domains     = require('./components/domains')
const Domain      = require('./components/domain')
const AliasEditor = require('./components/aliasEditor')

const elem = document.getElementById('app')
const hashHistory = ReactRouter.hashHistory
const IndexRoute = ReactRouter.IndexRoute
const Router = ReactRouter.Router
const Route = ReactRouter.Route

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/domains" component={Domains}/>
      <Route path="/domains/:domain" component={Domain}/>
      <Route path="/domains/:domain/aliases/:alias" component={AliasEditor}/>
    </Route>
  </Router>
), elem)
