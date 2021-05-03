import React from 'react'
import { Button } from 'reactstrap'
import {useDispatch} from 'react-redux'
import {setTableRowDetails} from '../store/actions/index'
import { Lock, Edit, Trash2, FilePlus, Eye } from 'react-feather'
import { Link } from 'react-router-dom'

const RowDataAssignment = ({studentName = "", studentIndex = "", status = "Pending",  grade = "", file = null}) => {
     const color = status === "Pending" ? "#e6b800" : "#009933"
     return (
          <tr >
               <td style = {{fontSize : '12px'}}>{grade}</td>
               <td  style = {{fontSize : '12px'}} scope="row">{studentIndex}</td>
               <td style = {{fontSize : '12px'}}>{studentName}</td>
               <td style = {{fontSize : '12px',  color}} className="font-weight-bold">{status}</td>
               <td  style = {{fontSize : '12px'}} > <Button 
                         onClick= {() => "dispatch(setTableRowDetails(obj))" } 
                         size="sm" 
                         outline 
                         className="mr-1"
                         color="danger">
                          Download
                         </Button></td>
        </tr>
     )
}

export default RowDataAssignment
