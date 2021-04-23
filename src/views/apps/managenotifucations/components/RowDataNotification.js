import React, {useState, useSelector} from 'react'
import { Button, Tooltip } from 'reactstrap'
import {useDispatch} from 'react-redux'
import { Lock, Edit, Trash2, FilePlus, Eye } from 'react-feather'

const RowData = ({title = "", description = "",  date = "01/01/2021", more = null}) => {
      const dispatch = useDispatch()

      const [tooltipOpen, setTooltipOpen] = useState(false)
      const toggle = () => setTooltipOpen(!tooltipOpen)

     return (
          <tr >
               <td  style = {{fontSize : '12px'}} scope="row">{date}</td>
               <td style = {{fontSize : '12px'}}>{title}</td>
               <td style = {{fontSize : '12px'}}>{description}</td>
               <td  style = {{fontSize : '12px'}} ><Button 
                         id="DisabledAutoHideExample"
                         size="sm" 
                         outline 
                         color="none">
                           <p  className="text-primary"> <Eye size={20} /></p>
                              <Tooltip placement="top" className="bg-warning" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
                                   
                                   <p className="text-primary mt-1">Recipients : </p>
                                        <p>Teachers, Student</p>
                                   <p className="text-primary">grades : </p>
                                        <p>All</p>
                                   <p className="text-primary">classes : </p>
                                    <p>A, B, C</p>
                              </Tooltip>
                         </Button></td>
        </tr>
     )
}

export default RowData
