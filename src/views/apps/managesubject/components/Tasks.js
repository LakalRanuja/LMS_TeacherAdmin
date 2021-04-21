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

const Tasks = props => {

  const state = useSelector(state => state.manageSubjectContent)
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
   const rowDatatState = useSelector(state => state.manageSubjectContent.rowDataObject)
   const [guests, setGuests] = useState({})
   const [grade, setGrade] = useState({})
   const [gradeLetter, setGradeLetter] = useState({})
   
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
    {title : "An Apple", grade : "11 B", description : "Online free AI English to Microsoft, IBM, Naver, Yandex and Baidu.", file : null},
    {title : "The Google", grade : "12 A", description : "English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.", file : null},
    {title : "The Yandex", grade : "10 C", description : "Online free AI English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.", file : null},
    {title : "Microsoft", grade : "9 A", description : "Online free AI English to Sinhala translator powered by Google", file : null}
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
    <div className='todo-app-list overflow-auto'>
      <div className='app-fixed-search d-flex align-items-center'>
          <div className="bg-white myStyle__container col-12 p-2">
                {/* [UPDATES] */}
                 {state.toggleNavClasses  ? <div className="col-12">
                    <h4>Manage Lessons</h4>
                    <div className="myStyle__hr mt-1 mb-1"></div>

                    {/* input Container */}
                    <div className="row bg-white rounded mr-1 shadow py-1 myContainer">
                         <div className="col-8 px-2">
                         {/* grade */}
                         <FormGroup className="col-12 ">
                            <Label for='gradeManageLesson'>Grade</Label>
                          <div className="row">
                          <div className="col-7">
                              <Select 
                                  id='gradeManageLesson'
                                  className='react-select'
                                  classNamePrefix='select'
                                  isClearable={false}
                                  options={gradeOptions}
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

                          <FormGroup className="col-12">
                              <Label for="exampleEmail">Title</Label>
                              <Input type="text" name="email" id="exampleEmail" size = "sm" value = {rowDatatState ? rowDatatState.title : ""} placeholder="" className= " border border-primary bg-white" />
                            </FormGroup>

                            <FormGroup className="col-12">
                              <Label for="exampleText">Description</Label>
                              <Input type="textarea" name="text" id="exampleText" size = "sm" value = { rowDatatState ? rowDatatState.description : ""}  placeholder="" className= " border border-primary " />
                            </FormGroup>
                         </div>

                         <div className="col-4  px-1">
                              <Button className="col-12 mb-1 mt-2" size = "sm" color="primary">Save</Button>
                              <Button className="col-12 mb-1" size = "sm" color="primary">Update</Button>
                              <Button className="col-12 mb-1" size = "sm" color="danger">Delete</Button>
                          </div>
                    </div>

                    <div className="bg-white row mt-2 rounded mr-1 shadow px-1 overflow-auto myTableContainer ">
                    <Table size="sm" hover >
                        <thead>
                          <tr>
                          <th style={{width : '25%'}}>Title</th>
                            <th style={{width : '50%'}}>Description</th>
                            <th style={{width : '20%'}}>Class</th>
                            <th style={{width : '25%'}}>Action</th>
                          </tr>
                        </thead>
                        <tbody >
                        {/* here */}
                         { dataObjArray.map((item) => <RowData title= {item.title} grade= {item.grade} description= {item.description}  />)}
                        
                        </tbody>
                      </Table>
                    </div>
                </div> :  <div className="col-12">
                    <h4>Manage Contents</h4>
                    <div className="myStyle__hr mt-1 mb-1"></div>

                    {/* input Container */}
                    <div className="row bg-white rounded mr-1 shadow py-1 myContainer">
                         <div className="col-8 px-2">
                        {/* grade */}
                        <FormGroup className="col-12 ">
                            <Label for='gradeManageContent'>Grade</Label>
                          <div className="row">
                          <div className="col-7">
                              <Select 
                                  id='gradeManageContent'
                                  className='react-select'
                                  classNamePrefix='select'
                                  isClearable={false}
                                  options={gradeOptions}
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
                                  id='gradeLetterManageContent'
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

                          {/* dropdown  */}
                          <FormGroup className="col-12 ">
                            <Label for='guests'>All Lessons</Label>
                            <Select 
                              id='guests'
                              className='react-select'
                              classNamePrefix='select'
                              isClearable={false}
                              options={guestsOptions}
                              theme={selectThemeColors}
                              value={guests.length ? [...guests] : null}
                              onChange={data => setGuests([...data])}
                              components={{
                                Option: GuestsComponent
                              }}
                            />
                          </FormGroup>

                          <FormGroup className="col-12">
                              <Label for="exampleEmail">Title</Label>
                              <Input type="text" name="email" id="exampleEmail" size = "sm" placeholder="" value = {rowDatatState ? rowDatatState.title : ""} className= " border border-primary bg-white" />
                            </FormGroup>

                            <FormGroup className="col-12 ">
                              <Label for="exampleText">Description</Label>
                              {/* <Editor editorState={content}  stripPastedStyles={{backgroundColor: "blue", width: "200px", height: "500px"}} toolbarStyle={{ display: "flex", flexDirection: 'row',  flexWrap: "wrap", justifyContent : "flex-start"}} onEditorStateChange={data => setContent(data)} /> */}
                              <Editor
                                editorState={content}
                                wrapperStyle={{border: "1px solid lightgray", borderRadius : "5px"}}
                                editorStyle={{height : "250px", padding: "5px"}}
                                toolbarStyle={{backgroundColor : "#f5f5f0"}}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={data => setContent(data)}
                              />
                            </FormGroup>
                            

                            <div className= "pr-1"> 
                            {/* media here */}
                            <Media className='mb-2'>
                                {/* {renderUserAvatar()} */}
                                <Media className='mt-0' body>
                                  <div className='d-flex flex-wrap ml-1  mt-0 px-0'>
                                    <Label for="exampleEmail" className= "mr-1">Add File</Label>
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

                         <div className="col-4  px-1">
                              <Button className="col-12 mb-1 mt-2" size = "sm"  color="primary">Save</Button>
                              <Button className="col-12 mb-1"  size = "sm" color="primary">Update</Button>
                              <Button className="col-12 mb-1" size = "sm"  color="danger">Delete</Button>
                          </div>
                    </div>

                    <div className="bg-white row mt-2 rounded mr-1 shadow px-1 overflow-auto myTableContainer ">
                    <Table size="sm" hover>
                        <thead>
                          <tr>
                            <th style={{width : '25%'}}>Title</th>
                            <th style={{width : '50%'}}>Description</th>
                            <th style={{width : '20%'}}>Grade</th>
                            <th style={{width : '25%'}}>Action</th>
                          </tr>
                        </thead>
                        <tbody >
                        {/* here */}
                         { dataObjArray2.map((item) => <RowData title= {item.title} grade= {item.grade} description= {item.description}  />)}
                        
                        </tbody>
                      </Table>
                    </div>
                </div>}
          </div>
      </div>  
    </div>
  )
}

export default Tasks
