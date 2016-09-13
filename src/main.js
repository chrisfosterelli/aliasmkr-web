
/* Main application entry point
 */

import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import DomainList from './components/DomainList'
import IncomingList from './components/IncomingList'
import OutgoingList from './components/OutgoingList'
import rootReducer from './reducers/root'

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware)
const elem = document.getElementById('app')

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/domains" component={DomainList}/>
        <Route path="/domains/:domain" component={IncomingList}/>
        <Route path="/domains/:domain/aliases/:alias" component={OutgoingList}/>
      </Route>
    </Router>
  </Provider>
), elem)
