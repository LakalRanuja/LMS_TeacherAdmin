// ** React Imports
import { Link } from 'react-router-dom'
import {toggleNavBeeetweenSubject_Content, resetTableRowDetails, toggleNavBeeetweenInbox_ManageNotification} from '../store/actions/index'


import { useSelector } from 'react-redux'
// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { Mail, Star, Check, Trash, Plus, Folder, FolderPlus } from 'react-feather'

const TodoSidebar = props => {
  // ** Props
  const { handleTaskSidebar, setMainSidebar, mainSidebar, dispatch, getTasks, params } = props
  const state = useSelector(state => state.Notification)

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
                  to={'/apps/managenotifucations/view'}
                  active={state.toggleNavClasses && !state.toggleNavInboxClasses}
                  onClick={() => {
                    dispatch(toggleNavBeeetweenSubject_Content(true))
                    dispatch(toggleNavBeeetweenInbox_ManageNotification(false))
                    dispatch(resetTableRowDetails())
                  }}
                >
                  <Folder className='mr-75' size={18} />
                  <span className='align-middle'>Manage Activities</span>
                </ListGroupItem>

                <ListGroupItem
                  tag={Link}
                  to={'/apps/managenotifucations/view'}
                  active={ !state.toggleNavClasses  && !state.toggleNavInboxClasses}
                  onClick={() => {
                    dispatch(toggleNavBeeetweenSubject_Content(false))
                    dispatch(toggleNavBeeetweenInbox_ManageNotification(false))
                    dispatch(resetTableRowDetails())
                  }}
                  action
                >
                  <Folder className='mr-75' size={18} />
                  <span className='align-middle'>Manage Notifications</span>
                </ListGroupItem>
                
                <ListGroupItem
                  tag={Link}
                  to={'/apps/managenotifucations/view'}
                  active={ state.toggleNavInboxClasses}
                  onClick={() => {
                    dispatch(toggleNavBeeetweenInbox_ManageNotification(true))
                    dispatch(resetTableRowDetails())
                  }}
                  action
                >
                  <Folder className='mr-75' size={18} />
                  <span className='align-middle'>Inbox</span>
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
