// ** React Imports
import { Fragment, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// ** Third Party Components
import classnames from 'classnames'

// ** Todo App Components
import Tasks from '../components/TasksStudentDetails'
import Sidebar from '../components/SidebarStudentDetails'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, updateTask, selectTask, addTask, deleteTask, reOrderTasks } from '../store/actions/index'
import '../components/styles/studentDetails.css'
// ** Styles
import '@styles/react/apps/app-todo.scss'

const StudentDetails = () => {
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

  // ** Function to handle Left sidebar & Task sidebar
  const handleMainSidebar = () => setMainSidebar(!mainSidebar)
  const handleTaskSidebar = () => setOpenTaskSidebar(!openTaskSidebar)

  return (
    // <Fragment>
    //   {/* <Card/> */}
    <>
     <div className="col-12 bg-white overflow-auto">
         {store ? (
            <Tasks
              store={store}
              tasks={store.tasks}
              sort={sort}
              query={query}
              params={params}
              setSort={setSort}
              setQuery={setQuery}
              dispatch={dispatch}
              getTasks={getTasks}
              paramsURL={paramsURL}
              updateTask={updateTask}
              selectTask={selectTask}
              reOrderTasks={reOrderTasks}
              handleMainSidebar={handleMainSidebar}
              handleTaskSidebar={handleTaskSidebar}
            />
          ) : null}
        </div>
    </>
    // </Fragment>
  )
}

export default StudentDetails
