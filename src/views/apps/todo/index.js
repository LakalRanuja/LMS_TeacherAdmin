// ** React Imports
import { Fragment, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// ** Third Party Components
import classnames from 'classnames' 

// ** Todo App Components
import Tasks from './Tasks'
import Sidebar from './Sidebar'
import TaskSidebar from './TaskSidebar'
// import Card from '../../ui-elements/cards/advance/CardCongratulations'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, updateTask, selectTask, addTask, deleteTask, reOrderTasks } from './store/actions'

import { updateAllFilters, updateFilter } from '../calendar/store/actions'

// ** Styles
import '@styles/react/apps/app-todo.scss'

const TODO = () => {
  // ** States
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [mainSidebar, setMainSidebar] = useState(false)
  const [openTaskSidebar, setOpenTaskSidebar] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const newStore = useSelector(state => state.calendar)
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

  // ** Get Tasks on mount & based on dependency change
  // useEffect(() => {
  //   dispatch(
  //     getTasks({
  //       filter: paramsURL.filter || '',
  //       q: query || '',
  //       sortBy: sort || '',
  //       tag: paramsURL.tag || ''
  //     })
  //   )
  // }, [store.tasks.length, paramsURL.filter, paramsURL.tag, query, sort])

  return (
    // <Fragment>
    //   {/* <Card/> */}
    <Fragment>
      <Sidebar
        store={newStore}
        // store={store}
        params={params}
        getTasks={getTasks}
        dispatch={dispatch}
        mainSidebar={mainSidebar}
        urlFilter={paramsURL.filter}
        updateFilter={updateFilter}
        updateAllFilters={updateAllFilters}
        setMainSidebar={setMainSidebar}
        handleTaskSidebar={handleTaskSidebar}
      />

            <TaskSidebar
              store={store}
              params={params}
              addTask={addTask}
              dispatch={dispatch}
              open={openTaskSidebar}
              updateTask={updateTask}
              selectTask={selectTask}
              deleteTask={deleteTask}
              handleTaskSidebar={handleTaskSidebar}
            />
      
      {/* <!-- Editable table --> */}
<div class="card">
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"
        ><a href="#!" class="text-success"
          ><i class="fas fa-plus fa-2x" aria-hidden="true"></i></a
      ></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <th class="text-center">Class</th>
            <th class="text-center">Start Date & Time</th>
            <th class="text-center">End Date & Time</th>
            <th class="text-center">Lesson</th>
            <th class="text-center">Content</th>
            <th class="text-center">More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="pt-3-half" contenteditable="true">11-A</td>
            <td class="pt-3-half" contenteditable="true">12-04-2021 15:00</td>
            <td class="pt-3-half" contenteditable="true">12-04-2021 17:00</td>
            <td class="pt-3-half" contenteditable="true">Real Numbers</td>
            <td class="pt-3-half" contenteditable="true">Number Patterns</td>
            <td>
              <span class="table-remove"
                >
                  <a href="/pages/blog/edit"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  More
                </button></a></span
              >
            </td>
          </tr>
          {/* <!-- This is our clonable table line --> */}
          <tr>
            <td class="pt-3-half" contenteditable="true">10-B</td>
            <td class="pt-3-half" contenteditable="true">13-04-2021 08:00</td>
            <td class="pt-3-half" contenteditable="true">13-04-2021 10:00</td>
            <td class="pt-3-half" contenteditable="true">Real Numbers</td>
            <td class="pt-3-half" contenteditable="true">Number Patterns</td>
            <td>
            <span class="table-remove"
                >
                  <a href="/pages/blog/edit"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  More
                </button></a></span
              >
            </td>
          </tr>
          {/* <!-- This is our clonable table line --> */}
          <tr>
            <td class="pt-3-half" contenteditable="true">9-C</td>
            <td class="pt-3-half" contenteditable="true">15-04-2021 03:30</td>
            <td class="pt-3-half" contenteditable="true">15-04-2021 05:30</td>
            <td class="pt-3-half" contenteditable="true">Real Numbers</td>
            <td class="pt-3-half" contenteditable="true">Number Patterns</td>

            <td>
            <span class="table-remove"
                >
                  <a href="/pages/blog/edit"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  More
                </button></a></span
              >
            </td>
          </tr>
          {/* <!-- This is our clonable table line --> */}
          <tr class="hide">
            <td class="pt-3-half" contenteditable="true">8-D</td>
            <td class="pt-3-half" contenteditable="true">16-04-2021 06:00</td>
            <td class="pt-3-half" contenteditable="true">16-04-2021 08:00</td>
            <td class="pt-3-half" contenteditable="true">Real Numbers</td>
            <td class="pt-3-half" contenteditable="true">Number Patterns</td>
            
            <td>
            <span class="table-remove"
                >
                  <a href="/pages/blog/edit"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  More
                </button></a></span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
{/* <!-- Editable table --> */}

    </Fragment>
    // </Fragment>
  )
}

export default TODO
