
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
import DomainIncomingList from './containers/DomainIncomingList'
import AliasOutgoingList from './containers/AliasOutgoingList'
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
        <Route path="/domains/:domain" component={DomainIncomingList}/>
        <Route 
          path="/domains/:domain/aliases/:alias"
          component={AliasOutgoingList}
        />
      </Route>
    </Router>
  </Provider>
), elem)
