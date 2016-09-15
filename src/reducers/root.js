
/* Root Reducer
 */

import { combineReducers } from 'redux'
import domains from './domains'
import aliases from './aliases'
import user from './user'

const root = combineReducers({ domains, aliases, user })
export default root
