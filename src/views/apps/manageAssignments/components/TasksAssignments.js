// ** React Imports
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles/task.css'
import { Media, Button, Form, FormGroup, Label, Input, FormText, Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem   } from 'reactstrap'
import RowData from './RowData'
import { Lock, Edit, Trash2, FilePlus } from 'react-feather'
import Select, { components } from 'react-select'
import htmlToDraft from 'html-to-draftjs'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState } from 'draft-js'
import { selectThemeColors, isObjEmpty } from '@utils'

// Stylesheets
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import AssignDetaillsCard from './AssignDetaillsCard'
import RowDataAssignment from './RowDataAssignment'

const TasksAssignments = () => {

  const [guests, setGuests] = useState({})
  const [content, setContents] = useState([])
  const [lesson, setLesson] = useState({})
  const [grade, setGrade] = useState({})
  const [gradeLetter, setGradeLetter] = useState({})

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

  const lessonOptions = [
    { value: 'An Apple', label: 'An Apple' },
    { value: 'The Google', label: 'The Google' },
    { value: 'The Yandex', label: 'The Yandex' },
    { value: 'Microsoft', label: 'Microsoft' }
  ]

  const LessonComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          {/* <Avatar className='my-0 mr-1' size='sm'  /> */}
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  const contentOptions = [
    { value: 'Lorem Ipsum is simply dummy text of the printing and typese industry.', label: 'Lorem Ipsum is simply dummy text 1.' },
    { value: 'Lorem Ipsum is simply dummy text of the printing and typesetting istry.', label: 'Lorem Ipsum is simply dummy text 2.' },
    { value: 'The YandexLorem Ipsum is simply dummy text of the printing and typesetting industry.', label: 'Lorem Ipsum is simply dummy text 3.' },
    { value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', label: 'Lorem Ipsum is simply dummy text 4' }
  ]

  const ContentComponent = ({ data, ...props }) => {
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

   // ** Function to change user image
   const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const dataObjArray = [
    {grade : "11-A", file : null, studentIndex : "5544", studentName : "Nuwan Perera", status : "Pending" },
    {grade : "11-A", file : null, studentIndex : "5543", studentName : "Ashen Kumara", status : "Pending" },
    {grade : "11-A", file : null, studentIndex : "5542", studentName : "Danushka Kariyawasam", status : "Completed" },
    {grade : "11-B", file : null, studentIndex : "5577", studentName : "Anura Perera", status : "Pending" },
    {grade : "11-B", file : null, studentIndex : "5576", studentName : "Sachithra Senanayaka", status : "Pending" },
    {grade : "11-B", file : null, studentIndex : "5574", studentName : "Dilruwan Perera", status : "Pending" },
    {grade : "11-B", file : null, studentIndex : "5578", studentName : "Kusal Janith Perera", status : "Completed" },
    {grade : "11-B", file : null, studentIndex : "5573", studentName : "Lasith Malinga", status : "Completed" }
  ]

  return (
    <div className=' col-12 ml-1'>
    <div className='row align-items-center'>
             <h3 className="mt-2 text-primary">View Assignment Status</h3>   
            <div className= "col-11 round ml-1 shadow mt-2  row pt-2 p-1">
                <div className="col-12  ">
                      {/* DETAILS ROW */}
                     <AssignDetaillsCard title="Classes"  description= "12-A , 12-B" iconName=""/>
                     <AssignDetaillsCard title="Lesson Title"  description= "English to Sinhala translator powered by Google"  iconName="Book" />
                     <AssignDetaillsCard title="Content Titles"  description= "Online free AI English to Microsoft , IBM, Naver , Yandex and Baidu.Online free AI English to Microsoft , IBM, Naver , Yandex and Baidu."  iconName="List" />
                     {/* <AssignDetaillsCard title="Submitted Date"  description= "12/04/2021"  iconName="Eye" />
                     <AssignDetaillsCard title="End Date"  description= "24/04/2021"  iconName="EyeOff" /> */}
                </div>
            </div>
            
            {/* table */}
            
              <div className="bg-white col-11 px-2 mt-4 rounded  shadow  ml-1 overflow-auto myTableContainer mb-2 ">
                      <Table size="sm" hover className="mt-1" >
                          <thead>
                            <tr>
                            <th style={{width : '10%'}}>Class</th>
                              <th style={{width : '20%'}}>Student Index</th>
                              <th style={{width : '40%'}}>Student Name</th>
                              <th style={{width : '20%'}}>Status</th>
                              <th style={{width : '20%'}}>Action</th>
                            </tr>
                          </thead>
                          <tbody >
                          {/* here */}
                          { dataObjArray.map((item) => <RowDataAssignment grade={item.grade} studentIndex={item.studentIndex} studentName={item.studentName} status={item.status} file={item.file} />)}
                          
                          </tbody>
                        </Table>
                      </div>
           
    </div>
    </div>
  )
}

export default TasksAssignments
