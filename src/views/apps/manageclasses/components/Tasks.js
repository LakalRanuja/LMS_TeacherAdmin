// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Blank Avatar Image Import
import blankAvatar from '@src/assets/images/avatars/avatar-blank.png'

// ** Third Party Components
import classnames from 'classnames'
import { ReactSortable } from 'react-sortablejs'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Menu, Search, MoreVertical } from 'react-feather'
import {
  Input,
  Badge,
  InputGroup,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  InputGroupText,
  DropdownToggle,
  InputGroupAddon,
  UncontrolledDropdown
} from 'reactstrap'

import TaskListRow from './TaskListRow'
import './styles/task.css'

const Tasks = props => {
  // ** Props
  const {
    query,
    tasks,
    params,
    setSort,
    dispatch,
    getTasks,
    setQuery,
    updateTask,
    selectTask,
    reOrderTasks,
    handleTaskSidebar,
    handleMainSidebar
  } = props


  return (
    <div className='todo-app-list'>
      <div className='app-fixed-search d-flex align-items-center'>
          <div className="bg-white myStyle__container col-11 p-2">
               <div className="container-fluid ">
                   <div className="row">
                     <div className="col-12">
                          <h4>Teaching Classes</h4>
                          <div className="myStyle__hr mt-1 mb-1"></div>
                     </div>
                   </div>
                   {/* here */}
                        <div className="overflow-auto col-12  myStyle__scrollbar">
                          <TaskListRow grade = "13" gradeLetter= "B" subject = "Mathematics" />
                          <TaskListRow grade = "12" gradeLetter= "C" subject = "Sinhala" />
                          <TaskListRow grade = "12" gradeLetter= "A" subject = "Science" />
                          <TaskListRow grade = "12" gradeLetter= "E" subject = "Sinhala" />
                          <TaskListRow grade = "13" gradeLetter= "A" subject = "Mathematics" />
                          <TaskListRow grade = "13" gradeLetter= "C" subject = "Sinhala" />
                          <TaskListRow grade = "12" gradeLetter= "A" subject = "Sinhala" />
                          <TaskListRow grade = "13" gradeLetter= "B" subject = "Science" />
                          <TaskListRow grade = "12" gradeLetter= "B" subject = "Sinhala" />
                          <TaskListRow grade = "13" gradeLetter= "A" subject = "Science" />
                          <TaskListRow grade = "12" gradeLetter= "A" subject = "Sinhala" />
                          <TaskListRow grade =" 13" gradeLetter= "D" subject = "Mathematics" />
                      </div>
               </div>
          </div>
      </div>  
    </div>
  )
}

export default Tasks
