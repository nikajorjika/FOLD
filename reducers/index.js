import { combineReducers } from 'redux'

import Users from './user'
import Events from './events'

export default combineReducers({
  user: Users,
  events: Events
})