import React from 'react'
import { Button } from 'reactstrap'
import {useDispatch} from 'react-redux'
import {setTableRowDetails} from '../store/actions/index'

const RowData = ({title = "", description = "", file = null}) => {
      const dispatch = useDispatch()
      const obj = { title,  description, file}
     return (
          <tr >
               <td  style = {{fontSize : '12px'}} scope="row">{title}</td>
               <td style = {{fontSize : '12px'}}>{description}</td>
               <td  style = {{fontSize : '12px'}} ><Button 
                         onClick= {() => dispatch(setTableRowDetails(obj)) } 
                         size="sm" 
                         outline 
                         color="primary">
                         edit
                         </Button></td>
        </tr>
     )
}

export default RowData
