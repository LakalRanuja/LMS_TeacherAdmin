
import {TOGGLE_NAV_BETWEEN_CONTENT_LESSON, SET_TABLE_ROW_DETAILS, RESET_TABLE_ROW_DETAILS, RESET_TOGGLE_NAV} from '../actionTypes/manageSubjectTypes'
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
  rowDataObject : {title : "", description : "", file : null}
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV_BETWEEN_CONTENT_LESSON:
      return { ...state, toggleNavClasses : action.task }

    case RESET_TOGGLE_NAV:
        return { ...state, toggleNavClasses : true }

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
export default TodoReducer
