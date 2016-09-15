
/* Root Reducer
 */

import { combineReducers } from 'redux'
import domains from './domains'
import user from './user'

const root = combineReducers({ user, domains })
export default root
