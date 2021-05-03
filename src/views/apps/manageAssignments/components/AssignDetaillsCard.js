import React from 'react'
import { Button } from 'reactstrap'
import {useDispatch} from 'react-redux'
import {setTableRowDetails} from '../store/actions/index'
import { Lock, Cloud, Eye, EyeOff, List, Book, Database  } from 'react-feather'

const AssignDetaillsCard = ({title = "", description = "", iconName = ""}) => {
   let Icon = <Database size={15} />
   if (iconName === "Eye".trim()) {
        Icon = <Eye size={15} />
   } else if (iconName === "EyeOff".trim()) {
     Icon = <EyeOff size={15} />
   } else if (iconName === "List".trim()) {
     Icon = <List size={15} />
   } else if (iconName === "Book".trim()) {
     Icon = <Book size={15} />
   }

     return (
          <div className=" row " style={{marginBottom : "1px"}}>
                            <div className="" style={{width : "170px"}}> 
                                <h6 className="mr-1 text-dark"><span className="mr-1 text-primary">{Icon} </span> {title}</h6>
                            </div>
                            <div className="col-9">
                                <p className="">{description}</p> 
                            </div>
                      </div>
     )
}

export default AssignDetaillsCard
