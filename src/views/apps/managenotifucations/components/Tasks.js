// ** React Imports
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles/task.css'
import { Button, Form, FormGroup, Label, Input, Table  } from 'reactstrap'
import RowData from './RowData'
import TaskNotifications from './TasksNotification'
import TasksMyInbox from './TasksMyInbox'
import Select, { components } from 'react-select'
import htmlToDraft from 'html-to-draftjs'
import { EditorState, ContentState } from 'draft-js'
import { selectThemeColors, isObjEmpty } from '@utils'

// Stylesheets
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const Tasks = props => {

  const state = useSelector(state => state.Notification)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)
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

  // States of editor -----
 
  const initialContent = `
  <p></p>
  <p></p>
  `
  
  const [data, setData] = useState(null)
  const contentBlock = htmlToDraft(initialContent)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorState = EditorState.createWithContent(contentState)
  const [content, setContent] = useState(editorState)

  // [UPDATE]
   // ** States
   const [img, setImg] = useState(null)
   const rowDatatState = useSelector(state => state.Notification.rowDataObject)
   const [guests, setGuests] = useState({})
   const [grade, setGrade] = useState({})
   const [gradeLetter, setGradeLetter] = useState({})
   const [isGradeChecked, setIsGradeChecked] = useState(false)
   const [isClassChecked, setIsClassChecked] = useState(false)

      useEffect(() => {
        setGrade({})
        setGradeLetter({})
        setIsGradeChecked(false)
        setIsClassChecked(false)
      }, [state.toggleNavClasses])
   

  const dataObjArray = [
    {title : "An Apple", date : "20/03/2021", description : "Online free AI English to Microsoft, IBM, Naver, Yandex and Baidu.", more : null},
    {title : "The Google", date : "20/03/2021", description : "English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.", more : null},
    {title : "The Yandex", date : "11/03/2021", description : "Online free AI English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.", more : null},
    {title : "Microsoft", date : "27/02/2021", description : "Online free AI English to Sinhala translator powered by Google", more : null}
  ]
  const dataObjArray2 = [
    {title : "An Red Apple", grade : "11 A", description : "Online free AI English to Microsoft, IBM, Naver, Yandex and Baidu.", file : null},
    {title : "The Small Google", grade : "13 A", description : "English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.", file : null},
    {title : "The Large Yandex", grade : "8 A", description : "Online free AI English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.", file : null},
    {title : "My Self", grade : "6 A", description : "Online free AI English to Sinhala translator powered by Google", file : null}
  ]

  const guestsOptions = [
    { value: 'An Apple', label: 'An Apple' },
    { value: 'The Google', label: 'The Google' },
    { value: 'The Yandex', label: 'The Yandex' },
    { value: 'Microsoft', label: 'Microsoft' }
  ]

  const GuestsComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          {/* <Avatar className='my-0 mr-1' size='sm'  /> */}
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  const gradeOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' }
  ]

  const GradeComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          {/* <Avatar className='my-0 mr-1' size='sm'  /> */}
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  const gradeLetterOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },
    { value: 'F', label: 'F' }
  ]

  const GradeLetterComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          {/* <Avatar className='my-0 mr-1' size='sm'  /> */}
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  return (
    <div className='todo-app-list overflow-auto  '>
      <div className='app-fixed-search d-flex align-items-center  '>
          <div className="bg-white myStyle__container col-12 p-2">
                {/* [UPDATES] */}
                 {!state.toggleNavInboxClasses ? state.toggleNavClasses  ? <div className="col-12">
                    <h4>Manage Activities</h4>
                    <div className="myStyle__hr mt-1 mb-1"></div>

                    {/* input Container */}
                    <div className="row bg-white rounded mr-1 shadow py-1 myContainer">
                         <div className="col-12 px-2">
                         {/* grade */}
                          <div className=" pb-1 " > 
                          <FormGroup className="col-12 mb-1">
                            <Label for='gradeManageLesson' className="text-primary mt-1">Grade</Label> 

                           <Form className="mt-1 mb-1">
                              <FormGroup check inline  className="col-3">
                                <Label check>
                                  <Input type="checkbox"color="primary" onChange={ () => setIsGradeChecked(!isGradeChecked)}/>  All Grades
                                </Label>
                              </FormGroup>
                              <FormGroup check inline className="col-4">
                                <Label check>
                                  <Input type="checkbox" color="primary"  onChange={() => setIsClassChecked(!isClassChecked)} /> All Classes
                                </Label>
                              </FormGroup>
                            </Form>

                         
                          <div className="row">
                          <div className="col-7 ">
                              <Select 
                                isDisabled={isGradeChecked}
                                 isMulti
                                  id='gradeManageLesson'
                                  className='react-select'
                                  classNamePrefix='select'
                                  isClearable={false}
                                  options={gradeOptions}
                                  theme={selectThemeColors}
                                  value={grade.length ? [...grade] : null}
                                  onChange={data => setGrade([...data])}
                                  components={{
                                    Option: GradeComponent
                                  }}
                                />
                              </div>
                              
                              <div className="col-5">
                              <Select 
                                  isDisabled={isClassChecked}
                                  isMulti
                                  id='gradeLetterManageLesson'
                                  className='react-select'
                                  classNamePrefix='select'
                                  isClearable={false}
                                  options={gradeLetterOptions}
                                  theme={selectThemeColors}
                                  value={gradeLetter.length ? [...gradeLetter] : null}
                                  onChange={data => setGradeLetter([...data])}
                                  components={{
                                    Option: GradeLetterComponent
                                  }}
                                />
                           </div>
                          </div>
                          </FormGroup>                     
                          </div>

                          <div className="border-bottom mb-1 mx-1"></div>

                            <FormGroup className="col-12">
                                <Label for="exampleEmail" className="text-primary">Title</Label>
                                <Input type="text" name="email" id="exampleEmail" size = "sm" value = {rowDatatState ? rowDatatState.title : ""} placeholder="" className= " border border-primary bg-white" />
                              </FormGroup>

                              <FormGroup className="col-12">
                                <Label for="exampleText" className="text-primary">Description</Label>
                                <Input type="textarea" name="text" id="exampleText" size = "sm" value = { rowDatatState ? rowDatatState.description : ""}  placeholder="" className= " border border-primary " />
                              </FormGroup>

                             <div className="px-1 mb-2">
                               <Button className="col-12  px-1 mt-2" size = "sm" color="primary">Send</Button>
                             </div>
                         </div>

                    </div>

              {/* table container */}
                    <div className="bg-white row mt-2 rounded mr-1 shadow px-1 overflow-auto myTableContainer ">
                    <Table size="sm" hover >
                        <thead>
                          <tr>
                            <th style={{width : '20%'}}>Date</th>
                          <th style={{width : '25%'}}>Title</th>
                            <th style={{width : '50%'}}>Description</th>
                            <th style={{width : '25%'}}>More</th>
                          </tr>
                        </thead>
                        <tbody >
                        {/* here */}
                         { dataObjArray.map((item) => <RowData title= {item.title} date= {item.date} description= {item.description} more= {null} />)}
                        
                        </tbody>
                      </Table>
                    </div>
                </div> :  <TaskNotifications /> : <TasksMyInbox />}
          </div>
      </div>  
    </div>
  )
}

export default Tasks
