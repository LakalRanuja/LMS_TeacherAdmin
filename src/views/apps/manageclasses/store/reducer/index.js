
import {TOGGLE_NAV_BETWEEN_TEACHING_MY_CLASSES} from '../actionTypes/manageClassesTypes'
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

  toggleNavClasses : true
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV_BETWEEN_TEACHING_MY_CLASSES:
      return { ...state, toggleNavClasses : action.task }

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
