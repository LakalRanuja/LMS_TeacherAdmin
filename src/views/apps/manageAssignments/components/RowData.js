import React from 'react'
import { Button } from 'reactstrap'
import {useDispatch} from 'react-redux'
import {setTableRowDetails} from '../store/actions/index'
import { Lock, Edit, Trash2, FilePlus, Eye } from 'react-feather'
import { Link } from 'react-router-dom'

const RowData = ({lessonTitle = "", contentTitle = "",  grade = "", file = null}) => {
      const dispatch = useDispatch()
      const obj = { }
     //  const obj = { title,  description, file}
     return (
          <tr >
               <td style = {{fontSize : '12px'}}>{grade}</td>
               <td  style = {{fontSize : '12px'}} scope="row">{lessonTitle}</td>
               <td style = {{fontSize : '12px'}}>{contentTitle}</td>
               <td  style = {{fontSize : '12px'}} ><Link to="/apps/view-assignments/view"> <Button 
                         onClick= {() => "dispatch(setTableRowDetails(obj))" } 
                         size="sm" 
                         outline 
                         className="mr-1"
                         color="primary">
                         <Eye size={20} />
                         </Button></Link>
                         <Button 
                         onClick= {() => "dispatch(setTableRowDetails(obj))" } 
                         size="sm" 
                         outline 
                         color="danger">
                         <Trash2 size={20} />
                         </Button></td>
        </tr>
     )
}

export default RowData
