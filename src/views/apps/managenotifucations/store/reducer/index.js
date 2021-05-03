
import {TOGGLE_NAV_BETWEEN_CONTENT_LESSON,
      TOGGLE_NAV_BETWEEN_INBOX_AND_MANAGE_NOTIFICATION_OR_ACTIVITY,
      SET_TABLE_ROW_DETAILS,
      RESET_TABLE_ROW_DETAILS,
      RESET_TOGGLE_NAV
  } from '../actionTypes/manageNotificationTypes'
// ** Initial State
const initialState = {
  tasks: [],
  selectedTask: {},
  params: {
    filter: '',
    q: '',
    sort: '',
    tag: ''
  },

  toggleNavClasses : true,
  toggleNavInboxClasses : false,
  rowDataObject : {title : "", description : "", file : null}
}

const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV_BETWEEN_CONTENT_LESSON:
      return { ...state, toggleNavClasses : action.task }

    case RESET_TOGGLE_NAV:
        return { ...state, toggleNavClasses : true,  toggleNavInboxClasses : false }
    
    case TOGGLE_NAV_BETWEEN_INBOX_AND_MANAGE_NOTIFICATION_OR_ACTIVITY:
      return { ...state, toggleNavInboxClasses : action.task }

    case SET_TABLE_ROW_DETAILS:
        return { ...state, rowDataObject : action.task } 
    
    case RESET_TABLE_ROW_DETAILS:
      return { ...state, rowDataObject : {title : "", description : "", file : null} }     


    case 'GET_TASKS':
      return { ...state, tasks: action.tasks, params: action.params }
    case 'UPDATE_TASKS':
      return { ...state }
    case 'REORDER_TASKS':
      return { ...state, tasks: action.tasks }
    case 'SELECT_TASK':
      return { ...state, selectedTask: action.task }
    default:
      return state
  }
}
export default NotificationReducer
