// ** React Imports
import { Link } from 'react-router-dom'

// // ** Custom Components
// import Avatar from '@components/avatar'

// // ** Blank Avatar Image Import
// import blankAvatar from '@src/assets/images/avatars/avatar-blank.png'

// // ** Third Party Components
// import classnames from 'classnames'
// import { ReactSortable } from 'react-sortablejs'
// import PerfectScrollbar from 'react-perfect-scrollbar'
// import { Menu, Search, MoreVertical } from 'react-feather'
// import {
//   Input,
//   Badge,
//   InputGroup,
//   CustomInput,
//   DropdownMenu,
//   DropdownItem,
//   InputGroupText,
//   DropdownToggle,
//   InputGroupAddon,
//   UncontrolledDropdown
// } from 'reactstrap'

import TaskListRow from './TaskListRow'
import './styles/task.css'

import { useSelector } from 'react-redux'

const Tasks = props => {

  const state = useSelector(state => state.manageClassess)
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

  // [UPDATE]
  let header = ''
  const teachingClassArray = [
      {grade : "12", gradeLetter : "A", subject : "Mathematics", to : "/apps/user/view/1" },
      {grade : "13", gradeLetter : "C", subject : "Sinhala", to :  "/apps/user/view/1" },
      {grade : "13", gradeLetter : "D", subject : "Mathematics", to :  "/apps/user/view/1" },
      {grade : "12", gradeLetter : "E", subject : "Science", to :  "/apps/user/view/1" },
      {grade : "13", gradeLetter : "B", subject : "Mathematics", to :  "/apps/user/view/1" }
    ]

  const myClassArray = [
      {grade : "12", gradeLetter : "A", subject : null, to : "/apps/user/list" },
      {grade : "13", gradeLetter : "C", subject : null, to : "/apps/user/list" }
    ]
 
  if (state.toggleNavClasses) {
        header = 'Teaching Classes'
    } else {
        header = 'My Classes'
    }

  return (
    <div className='todo-app-list'>
      <div className='app-fixed-search d-flex align-items-center'>
          <div className="bg-white myStyle__container col-11 p-2">

               { state.toggleNavClasses ? <div className="container-fluid ">
                      <div className="row">
                        <div className="col-12">
                              <h4>{header}</h4>
                              <div className="myStyle__hr mt-1 mb-1"></div>
                        </div>
                      </div>
                      {/* here */}
                            <div className="overflow-auto col-12  myStyle__scrollbar">
                              {
                                teachingClassArray.map((item) => {
                                  return <TaskListRow grade = {item.grade} gradeLetter = {item.gradeLetter} subject = {item.subject} to = {item.to} />
                                })
                              }
                          </div>
                  </div> :  <div className="container-fluid ">
                      <div className="row">
                        <div className="col-12">
                              <h4>{header}</h4>
                              <div className="myStyle__hr mt-1 mb-1"></div>
                        </div>
                      </div>
                      {/* here */}
                            <div className="overflow-auto col-12  myStyle__scrollbar">
                            {
                              myClassArray.map((item) => {
                                  return <TaskListRow grade = {item.grade} gradeLetter= {item.gradeLetter} subject = {item.subject} to={item.to} />
                                })
                              }
                          </div>
                  </div>
               }
          </div>
      </div>  
    </div>
  )
}

export default Tasks
