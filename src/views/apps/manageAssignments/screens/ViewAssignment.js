// ** React Imports
import { Fragment, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// ** Third Party Components
import classnames from 'classnames'

// ** Todo App Components
import TasksAssignments from '../components/TasksAssignments'
// import Card from '../../ui-elements/cards/advance/CardCongratulations'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, updateTask, selectTask, addTask, deleteTask, reOrderTasks } from '../store/actions/index'

// ** Styles
import '@styles/react/apps/app-todo.scss'

const Index = () => {
  // ** States
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [mainSidebar, setMainSidebar] = useState(false)
  const [openTaskSidebar, setOpenTaskSidebar] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.todo)

  // ** URL Params
  const paramsURL = useParams()
  const params = {
    filter: paramsURL.filter || '',
    q: query || '',
    sortBy: sort || '',
    tag: paramsURL.tag || ''
  }

  const handleMainSidebar = () => setMainSidebar(!mainSidebar)
  const handleTaskSidebar = () => setOpenTaskSidebar(!openTaskSidebar)

  return (
    <div className="col-12 overflow-auto bg-white align-items-center">
          <TasksAssignments />
     </div>
  )
}

export default Index
