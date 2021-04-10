import React from 'react'
import './styles/taskListRow.css'

const TaskListRow = ({gradeLetter = "D", grade = "12", subject = null}) => {
     return (
               <div className="row  btn-light myStyle__list">
                    <div className="col-3 align-middle">
                    <h6 className="text-center mystyle__col__text font-weight-bold">{grade} {gradeLetter}</h6>
                    </div>

                    <div className="col-7 myStyle__row_col">
                    <h6 className="text-left align-middle mystyle__col__text font-weight-bold">{subject}</h6>
                    </div>

                    <div className="col-2 text-right">
                    <button type="button" class="btn btn-primary btn-sm">More</button>
                    </div>
               </div>
     )
}

export default TaskListRow
