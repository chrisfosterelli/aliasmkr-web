
/* Root Reducer
 */

import { combineReducers } from 'redux'
import domains from './domains'
import aliases from './aliases'
import alias from './alias'
import user from './user'

const root = combineReducers({ domains, aliases, alias, user })
export default root
