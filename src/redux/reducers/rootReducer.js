// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
// import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

import manageClassess from '@src/views/apps/manageclasses/store/reducer'
import manageSubjectContent from '@src/views/apps/managesubject/store/reducer'
import Notification from '@src/views/apps//managenotifucations/store/reducer'

const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  dataTables,
  manageClassess,
  manageSubjectContent,
  Notification
})

export default rootReducer
