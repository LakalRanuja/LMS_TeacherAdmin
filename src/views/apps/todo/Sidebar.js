// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Button, ListGroup, ListGroupItem, CardBody, CustomInput  } from 'reactstrap'
import { Mail, Star, Check, Trash, Plus, Archive } from 'react-feather'

import { updateAllFilters } from '../calendar/store/actions'
import store from './store/actions'

const TodoSidebar = props => {
  // ** Props
  const { handleTaskSidebar, setMainSidebar, mainSidebar, updateAllFilters, updateFilter, dispatch, getTasks, params, store} = props

  const filters = [
    { label: 'MyClass', color: 'danger', className: 'custom-control-danger mb-1' },
    { label: '10', color: 'primary', className: 'custom-control-primary mb-1' },
    { label: '9', color: 'warning', className: 'custom-control-warning mb-1' },
    { label: '8', color: 'success', className: 'custom-control-success mb-1' },
    { label: '7', color: 'info', className: 'custom-control-info' }
  ]

  // ** Functions To Handle List Item Filter
  const handleFilter = filter => {
    dispatch(getTasks({ ...params, filter }))
  }

  const handleTag = tag => {
    dispatch(getTasks({ ...params, tag }))
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    if ((params.filter && params.filter === value) || (params.tag && params.tag === value)) {
      return true
    } else {
      return false
    }
  }

  // ** Functions To Handle Add Task Click
  const handleAddClick = () => {
    handleTaskSidebar()
    setMainSidebar()
  }

  console.log('---------------------------')
  console.log(store.selectedCalendars)
  console.log('---------------------------')

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
              <Button.Ripple color='primary' onClick={handleAddClick} block>
                Book Class
              </Button.Ripple>
            </div>
            <PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
              {/* <ListGroup tag='div' className='list-group-filters'>
                <ListGroupItem
                  action
                  tag={Link}
                  to={'/apps/todo/'}
                  active={params.filter === '' && params.tag === ''}
                  onClick={() => handleFilter('')}
                >
                  <Archive className='mr-75' size={18} />
                  <span className='align-middle'>All Classes</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/important'}
                  active={handleActiveItem('important')}
                  onClick={() => handleFilter('important')}
                  action
                >
                  <Star className='mr-75' size={18} />
                  <span className='align-middle'>My Class</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/completed'}
                  active={handleActiveItem('completed')}
                  onClick={() => handleFilter('completed')}
                  action
                >
                  <Check className='mr-75' size={18} />
                  <span className='align-middle'>10</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/deleted'}
                  active={handleActiveItem('deleted')}
                  onClick={() => handleFilter('deleted')}
                  action
                >
                  <Check className='mr-75' size={18} />
                  <span className='align-middle'>9</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/new'}
                  active={handleActiveItem('new')}
                  onClick={() => handleFilter('new')}
                  action
                >
                  <Check className='mr-75' size={18} />
                  <span className='align-middle'>8</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/new2'}
                  active={handleActiveItem('new2')}
                  onClick={() => handleFilter('new2')}
                  action
                >
                  <Check className='mr-75' size={18} />
                  <span className='align-middle'>7</span>
                </ListGroupItem>
              </ListGroup> */}
{/* --------------------------------------------------------------------------------------------- */}

        <CardBody>
          <h5 className='section-label mb-1'>
            <span className='align-middle'>Filter</span>
          </h5>
          <CustomInput
            type='checkbox'
            className='mb-1'
            label='View All'
            id='view-all'
            checked={store.selectedCalendars.length === filters.length}
            onChange={e => dispatch(updateAllFilters(e.target.checked))}
          />
          <div className='calendar-events-filter'>
            {filters.length &&
              filters.map(filter => {
                return (
                  <CustomInput
                    type='checkbox'
                    key={filter.label}
                    id={filter.label}
                    label={filter.label}
                    checked={store.selectedCalendars.includes(filter.label)}
                    className={classnames({
                      [filter.className]: filter.className
                    })}
                    onChange={e => dispatch(updateFilter(filter.label))}
                  />
                )
              })}
          </div>
        </CardBody>
{/* ---------------------------------------------------------------------------------------------- */}

              {/* <div className='mt-3 px-2 d-flex justify-content-between'>
                <h6 className='section-label mb-1'>Tags</h6>
                <Plus className='cursor-pointer' size={14} />
              </div> */}

              <ListGroup className='list-group-labels'>
                <ListGroupItem
                  active={handleActiveItem('team')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/team'
                  onClick={() => handleTag('team')}
                  action
                >
                  {/* <span className='bullet bullet-sm bullet-primary mr-1'></span> */}
                  {/* <span className='align-middle'>Team</span> */}

                </ListGroupItem>
                <ListGroupItem
                  active={handleActiveItem('low')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/low'
                  onClick={() => handleTag('low')}
                  action
                >
                  {/* <span className='bullet bullet-sm bullet-success mr-1'></span> */}
                  {/* <span className='align-middle'>Low</span> */}

                </ListGroupItem>
                <ListGroupItem
                  active={handleActiveItem('medium')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/medium'
                  onClick={() => handleTag('medium')}
                  action
                >
                  {/* <span className='bullet bullet-sm bullet-warning mr-1'></span> */}
                  {/* <span className='align-middle'>Medium</span> */}

                </ListGroupItem>
                <ListGroupItem
                  active={handleActiveItem('high')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/high'
                  onClick={() => handleTag('high')}
                  action
                >
                  {/* <span className='bullet bullet-sm bullet-danger mr-1'></span> */}
                  {/* <span className='align-middle'>High</span> */}

                </ListGroupItem>
                <ListGroupItem
                  active={handleActiveItem('update')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/update'
                  onClick={() => handleTag('update')}
                  action
                >
                  {/* <span className='bullet bullet-sm bullet-info mr-1'></span>
                  <span className='align-middle'>Update</span> */}

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
