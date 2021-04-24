// ** React Imports
import { Link } from 'react-router-dom'
import {toggleNavBeeetweenSubject_Content, resetTableRowDetails} from '../store/actions/index'


import { useSelector } from 'react-redux'
// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { Mail, Star, Check, Trash, Plus, Folder, FolderPlus } from 'react-feather'

const TodoSidebar = props => {
  // ** Props
  const { handleTaskSidebar, setMainSidebar, mainSidebar, dispatch, getTasks, params } = props
  const state = useSelector(state => state.manageSubjectContent)

  return (
    <div
      className={classnames('sidebar-left', {
        show: mainSidebar === true
      })}
    >
      <div className='sidebar'>
        <div className='sidebar-content todo-sidebar'>
          <div className='todo-app-menu'>
            <div className='add-task'>
              {/* <Button.Ripple color='primary' onClick={handleAddClick} block>
                Add Tasks
              </Button.Ripple> */}
            </div>
            <PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
              <ListGroup tag='div' className='list-group-filters'>
              <ListGroupItem
                  action
                  tag={Link}
                  to={'/apps/managesubject/view'}
                  active={state.toggleNavClasses}
                  onClick={() => {
                    dispatch(toggleNavBeeetweenSubject_Content(true))
                    dispatch(resetTableRowDetails())
                  }}
                >
                  <Folder className='mr-75' size={18} />
                  <span className='align-middle'>Manage Lessons</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/managesubject/view'}
                  active={ !state.toggleNavClasses}
                  onClick={() => {
                    dispatch(toggleNavBeeetweenSubject_Content(false))
                    dispatch(resetTableRowDetails())
                  }}
                  action
                >
                  <FolderPlus className='mr-75' size={18} />
                  <span className='align-middle'>Manage Contents</span>
                </ListGroupItem>
               
              </ListGroup>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
