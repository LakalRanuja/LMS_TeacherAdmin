import React from 'react'
import { Button } from 'reactstrap'
import {useDispatch} from 'react-redux'
import {setTableRowDetails} from '../store/actions/index'

const RowData = ({title = "", description = "", file = null}) => {
      const dispatch = useDispatch()
      const obj = { title,  description, file}
     return (
          <tr >
               <th  style = {{fontSize : '11px'}} scope="row">{title}</th>
               <td style = {{fontSize : '11px'}}>{description}</td>
               <td  style = {{fontSize : '11px'}} ><Button 
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
