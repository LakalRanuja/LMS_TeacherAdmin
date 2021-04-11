// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import { toast } from 'react-toastify'
import Flatpickr from 'react-flatpickr'
import { X, Check, Trash } from 'react-feather'
import Select, { components } from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, CustomInput, Input, Form, Media } from 'reactstrap'

import avatar from '../../../assets/images/icons/pdf.png'

// ** Utils
import { selectThemeColors, isObjEmpty } from '@utils'

// ** Avatar Images
import img1 from '@src/assets/images/avatars/1-small.png'
import img2 from '@src/assets/images/avatars/3-small.png'
import img3 from '@src/assets/images/avatars/5-small.png'
import img4 from '@src/assets/images/avatars/7-small.png'
import img5 from '@src/assets/images/avatars/9-small.png'
import img6 from '@src/assets/images/avatars/11-small.png'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Toast Component
const ToastComponent = ({ title, icon, color }) => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color={color} icon={icon} />
        <h6 className='toast-title'>{title}</h6>
      </div>
    </div>
  </Fragment>
)

const AddEventSidebar = props => {
  // ** Props
  const {
    store,
    dispatch,
    open,
    handleAddEventSidebar,
    calendarsColor,
    calendarApi,
    refetchEvents,
    addEvent,
    selectEvent,
    updateEvent,
    removeEvent
  } = props

  // ** Vars
  const selectedEvent = store.selectedEvent
  const { register, errors, handleSubmit } = useForm()

  // ** States
  const [url, setUrl] = useState('')
  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')
  const [lessonOption, setLessons] = useState({})
  const [guests, setGuests] = useState({})
  const [allDay, setAllDay] = useState(false)
  const [location, setLocation] = useState('')
  const [endPicker, setEndPicker] = useState(new Date())
  const [startPicker, setStartPicker] = useState(new Date())
  const [value, setValue] = useState([{ value: '10', label: '10', color: 'primary' }])

  // ** Select Options
  const options = [
    { value: '10', label: '10', color: 'primary' },
    { value: '11', label: '11', color: 'danger' },
    { value: '9', label: '9', color: 'warning' },
    { value: '8', label: '8', color: 'success' },
    { value: '7', label: '7', color: 'info' }
  ]

  const guestsOptions = [
    { value: 'Donna Frank', label: 'Donna Frank'},
    { value: 'Jane Foster', label: 'Jane Foster'},
    { value: 'Gabrielle Robertson', label: 'Gabrielle Robertson'},
    { value: 'Lori Spears', label: 'Lori Spears'},
    { value: 'Sandy Vega', label: 'Sandy Vega'},
    { value: 'Cheryl May', label: 'Cheryl May'}
  ]
  const lessons = [
    { value: 'Real Numbers ', label: 'Real Numbers '},
    { value: 'Indices and Logarithms -I', label: 'Indices and Logarithms -I'},
    { value: 'Binomial Expressions', label: 'Binomial Expressions'},
    { value: 'Volume of Solids', label: 'Volume of Solids'},
    { value: 'Algebraic Fractions', label: 'Algebraic Fractions'},
    { value: 'Surface Area of Solids', label: 'Surface Area of Solids'}
  ]

  const content = [
    { value: 'Rational Numbers ', label: 'Rational Numbers '},
    { value: 'Real Numbers', label: 'Real Numbers'},
    { value: 'Fractional Indices of a Power', label: 'Fractional Indices of a Power'},
    { value: 'Laws of logarithms', label: 'Laws of logarithms'},
    { value: 'Logarithms', label: 'Logarithms'},
    { value: 'Applications of logarithms', label: 'Applications of logarithms'}
  ]

  // ** Custom select components
  const OptionComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <span className={`bullet bullet-${data.color} bullet-sm mr-50`}></span>
        {data.label}
      </components.Option>
    )
  }

  const GuestsComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          {/* <Avatar className='my-0 mr-1' size='sm' img={data.avatar} /> */}
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  const LessonComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // ** Adds New Event
  const handleAddEvent = () => {
    const obj = {
      title,
      start: startPicker,
      end: endPicker,
      allDay,
      display: 'block',
      extendedProps: {
        calendar: value[0].label,
        url: url.length ? url : undefined,
        guests: guests.length ? guests : undefined,
        lessonOption: lessonOption.length ? lessonOption : undefined,
        location: location.length ? location : undefined,
        desc: desc.length ? desc : undefined
      }
    }
    dispatch(addEvent(obj))
    refetchEvents()
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Event Added' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Reset Input Values on Close
  const handleResetInputValues = () => {
    dispatch(selectEvent({}))
    setTitle('')
    setAllDay(false)
    setUrl('')
    setLocation('')
    setDesc('')
    setLessons({})
    setGuests({})
    setValue([{ value: '10', label: '10', color: 'primary' }])
    setStartPicker(new Date())
    setEndPicker(new Date())
  }

  // ** Set sidebar fields
  const handleSelectedEvent = () => {
    if (!isObjEmpty(selectedEvent)) {
      const calendar = selectedEvent.extendedProps.calendar

      const resolveLabel = () => {
        if (calendar.length) {
          return { label: calendar, value: calendar, color: calendarsColor[calendar] }
        } else {
          return { value: '10', label: '10', color: 'primary' }
        }
      }
      setTitle(selectedEvent.title || title)
      setAllDay(selectedEvent.allDay || allDay)
      setUrl(selectedEvent.url || url)
      setLocation(selectedEvent.extendedProps.location || location)
      setDesc(selectedEvent.extendedProps.description || desc)
      setGuests(selectedEvent.extendedProps.guests || guests)
      setStartPicker(new Date(selectedEvent.start))
      setEndPicker(selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end))
      setValue([resolveLabel()])
    }
  }

  // ** (UI) updateEventInCalendar
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    const existingEvent = calendarApi.getEventById(updatedEventData.id)

    // ** Set event properties except date related
    // ? Docs: https://fullcalendar.io/docs/Event-setProp
    // ** dateRelatedProps => ['start', 'end', 'allDay']
    // ** eslint-disable-next-line no-plusplus
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index]
      existingEvent.setProp(propName, updatedEventData[propName])
    }

    // ** Set date related props
    // ? Docs: https://fullcalendar.io/docs/Event-setDates
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay })

    // ** Set event's extendedProps
    // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
    // ** eslint-disable-next-line no-plusplus
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index]
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    }
  }

  // ** Updates Event in Store
  const handleUpdateEvent = () => {
    const eventToUpdate = {
      id: selectedEvent.id,
      title,
      allDay,
      start: startPicker,
      end: endPicker,
      url,
      extendedProps: {
        location,
        description: desc,
        guests,
        calendar: value[0].label
      }
    }

    const propsToUpdate = ['id', 'title', 'url']
    const extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description']

    dispatch(updateEvent(eventToUpdate))
    updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate)
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Event Updated' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** (UI) removeEventInCalendar
  const removeEventInCalendar = eventId => {
    calendarApi.getEventById(eventId).remove()
  }
  const handleDeleteEvent = () => {
    dispatch(removeEvent(selectedEvent.id))
    removeEventInCalendar(selectedEvent.id)
    handleAddEventSidebar()
    toast.error(<ToastComponent title='Event Removed' color='danger' icon={<Trash />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Event Action buttons
  const EventActions = () => {
    if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
      return (
        <Fragment style={{marginTop: 10}}>
          <Button.Ripple className='mr-1' type='submit' color='primary'>
            Add
          </Button.Ripple>
          <Button.Ripple color='secondary' type='reset' onClick={handleAddEventSidebar} outline>
            Cancel
          </Button.Ripple>
        </Fragment>
      )
    } else {
      return (
        <Fragment  style={{marginTop: 10}}>
          <Button.Ripple
            className='mr-1'
            color='primary'
            // onClick={handleUpdateEvent}
          >
            Update
          </Button.Ripple>
          <Button.Ripple color='danger' onClick={handleDeleteEvent} outline>
            Delete
          </Button.Ripple>
        </Fragment>
      )
    }
  }

  // ** Close BTN
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleAddEventSidebar} />

  return (
    <Modal
      isOpen={open}
      toggle={handleAddEventSidebar}
      className='sidebar-lg'
      contentClassName='p-0'
      onOpened={handleSelectedEvent}
      onClosed={handleResetInputValues}
      modalClassName='modal-slide-in event-sidebar'
    >
      <ModalHeader className='mb-1' toggle={handleAddEventSidebar} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>
          {selectedEvent && selectedEvent.title && selectedEvent.title.length ? 'Update' : 'Add'} Event
        </h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
        <Form
          onSubmit={handleSubmit(data => {
            if (isObjEmpty(errors)) {
              if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
                handleAddEvent()
              } else {
                handleUpdateEvent()
              }
              handleAddEventSidebar()
            }
          })}
        >
         
          <FormGroup style={{marginTop: 10}}>
            <Label for='title'>
              Title <span className='text-danger'>*</span>
            </Label>
            <Input
              id='title'
              name='title'
              placeholder='Title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              innerRef={register({ register: true, validate: value => value !== '' })}
              className={classnames({
                'is-invalid': errors.title
              })}
            />
          </FormGroup>

          <FormGroup>
            <Label for='label'>Class</Label>
            <Select
              id='label'
              value={value}
              options={options}
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              onChange={data => setValue([data])}
              components={{
                Option: OptionComponent
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='startDate'>Start Date & Time</Label>
            <Flatpickr
              required
              id='startDate'
              // tag={Flatpickr}
              name='startDate'
              className='form-control'
              onChange={date => setStartPicker(date[0])}
              value={startPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='endDate'>End Date & Time</Label>
            <Flatpickr
              required
              id='endDate'
              // tag={Flatpickr}
              name='endDate'
              className='form-control'
              onChange={date => setEndPicker(date[0])}
              value={endPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>

          <FormGroup>
            <CustomInput
              type='switch'
              id='allDay'
              name='customSwitch'
              label='All Day'
              checked={allDay}
              onChange={e => setAllDay(e.target.checked)}
              inline
            />
          </FormGroup>

          <FormGroup>
            <Label for='eventURL'>Lesson</Label>
            <Select
              // type='url'
            isMulti
              id='guests'
              className='react-select'
              classNamePrefix='select'
              // value={url}
              isClearable={false}
              theme={selectThemeColors}
              value={lessonOption.length ? [...lessonOption] : null}
              options={lessons}
              onChange={data => setLessons([...data])}
              components={{
                Option: LessonComponent
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='guests'>Content</Label>
            <Select
              isMulti
              id='guests'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={content}
              theme={selectThemeColors}
              value={guests.length ? [...guests] : null}
              onChange={data => setGuests([...data])}
              components={{
                Option: GuestsComponent
              }}
            />
          </FormGroup>
      <Media style={{marginBottom: 10}}>
        <Media className='mr-25' left>
          <Media object className='rounded mr-50' src={avatar} alt='Generic placeholder image' height='80' width='80' />
        </Media>
        <Media className='mt-75 ml-1' body>
          <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
            Upload
            <Input type='file' onChange={onChange} hidden accept='image/*' />
          </Button.Ripple>
          <Button.Ripple color='secondary' size='sm' outline>
            Reset
          </Button.Ripple>
          <p>Upload documents !</p>
        </Media>
      </Media>

          {/* <FormGroup>
            <Label for='location'>Location</Label>
            <Input id='location' value={location} onChange={e => setLocation(e.target.value)} placeholder='Office' />
          </FormGroup>

          <FormGroup>
            <Label for='description'>Description</Label>
            <Input
              type='textarea'
              name='text'
              id='description'
              rows='3'
              value={desc}
              onChange={e => setDesc(e.target.value)}
              placeholder='Description'
            />
          </FormGroup> */}
          <FormGroup className='d-flex'>
            <EventActions />
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default AddEventSidebar
