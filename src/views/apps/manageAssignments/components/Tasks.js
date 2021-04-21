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

const Tasks = () => {

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
    {title : "An Apple", grade : "11 B", contentTitle : "Online free AI English to Microsoft, IBM, Naver, Yandex and Baidu.", file : null, lessonTitle : "Online free AI English."},
    {title : "The Google", grade : "12 A", contentTitle : "English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.", file : null, lessonTitle : "English to Sinhala translator powered by Google."},
    {title : "The Yandex", grade : "10 C", contentTitle : "Online free AI English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.", file : null, lessonTitle : "Online free AI English to Sinhala translator powered by Microsoft."},
    {title : "Microsoft", grade : "9 A", contentTitle : "Online free AI English to Sinhala translator powered by Google", file : null, lessonTitle : "Online free AI Sinhala."}
  ]

  return (
    <div className=' col-12 ml-1'>
    <div className='row align-items-center'>
             <h3 className="mt-2 text-primary">Manage Assignments</h3>   
            <div className= "col-11 round ml-1 shadow mt-2  row pt-2 p-1">
            {/* col */}
            <FormGroup className="col-12">
              <Label for='gradeManageLesson'>+ Class</Label>
                <div className="row">
                    <div className="col-7">
                        <Select 
                            id='gradeManageLesson'
                            className='react-select'
                            classNamePrefix='select'
                            isClearable={false}
                            options={gradeOptions}
                            maxMenuHeight="150px"
                            theme={selectThemeColors}
                            value={grade ? grade : null}
                            onChange={data => setGrade(data)}
                            components={{
                              Option: GradeComponent
                            }}
                          />
                        </div>
                        
                        <div className="col-5">
                        <Select 
                            isMulti
                            maxMenuHeight="150px"
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

              {/* col */}
              <FormGroup className="col-12 ">
                            <Label for='lesson'>+ Lesson Title</Label>
                            <Select 
                              id='lesson'
                              className='react-select'
                              classNamePrefix='select'
                              isClearable={false}
                              maxMenuHeight="150px"
                              options={guestsOptions}
                              theme={selectThemeColors}
                              value={lesson ? lesson : null}
                              onChange={data => setLesson(data)}
                              components={{
                                Option: LessonComponent
                              }}
                            />
               </FormGroup>

               <FormGroup className="col-12 ">
                            <Label for='content'>+ Content Titles</Label>
                            <Select 
                              isMulti
                              id='content'
                              className='react-select'
                              classNamePrefix='select'
                              maxMenuHeight="120px"
                              isClearable={false}
                              options={contentOptions}
                              theme={selectThemeColors}
                              value={content.length ? [...content] : null}
                              onChange={data => setContents([...data])}
                              components={{
                                Option: ContentComponent
                              }}
                            />
               </FormGroup>

              <div className="col-12">
                    <Media className='mb-4'>
                      {/* {renderUserAvatar()} */}
                      <Media className='mt-0' body >
                        <div className='d-flex flex-wrap   mt-0 px-0'>
                          <Label for="exampleEmail" className= "mr-1">+ Add Files</Label>
                          <Button.Ripple id='change-img' size = "sm" tag={Label} className=' mb-0 col-12' color='light'>
                            <span className='d-none d-sm-block'><FilePlus size={20} /></span>
                            <span className='d-block d-sm-none'>
                              <Edit size={14} />
                            </span>
                            <input type='file' hidden id='change-img' onChange={onChange}  />
                          </Button.Ripple>
                          
                        </div>
                      </Media>
                    </Media>
              </div>

            
            </div>
            
            {/* table */}
            <div>
              <div className="bg-white col-11 px-2 mt-4 rounded  shadow  ml-1 overflow-auto myTableContainer mb-2 ">
                      <Table size="sm" hover className="mt-1" >
                          <thead>
                            <tr>
                            <th style={{width : '15%'}}>Class</th>
                              <th style={{width : '30%'}}>Lesson Title</th>
                              <th style={{width : '40%'}}>Content Titles</th>
                              <th style={{width : '20%'}}>Action</th>
                            </tr>
                          </thead>
                          <tbody >
                          {/* here */}
                          { dataObjArray.map((item) => <RowData grade= {item.grade}  contentTitle= {item.contentTitle} lessonTitle= {item.lessonTitle}   />)}
                          
                          </tbody>
                        </Table>
                      </div>
            </div>
    </div>
    </div>
  )
}

export default Tasks
