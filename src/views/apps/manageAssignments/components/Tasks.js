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

  return (
    <div className='todo-app-list overflow-auto'>
      <div className='app-fixed-search d-flex align-items-center'>
          <div className="bg-white myStyle__container col-12 p-2">
                {/* [UPDATES] */}
          </div>   
      </div>  
    </div>
  )
}

export default Tasks
