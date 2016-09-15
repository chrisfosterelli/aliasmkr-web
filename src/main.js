
/* Main application entry point
 */

import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import MainApp from './containers/MainApp'
import UserDomainList from './containers/UserDomainList'
import IncomingList from './components/IncomingList'
import OutgoingList from './components/OutgoingList'
import rootReducer from './reducers/root'

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware)
const elem = document.getElementById('app')

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainApp}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/domains" component={UserDomainList}/>
        <Route path="/domains/:domain" component={IncomingList}/>
        <Route path="/domains/:domain/aliases/:alias" component={OutgoingList}/>
      </Route>
    </Router>
  </Provider>
), elem)
