// ** React Imports
import React, {useState, useEffect} from 'react'
import './styles/taskMyInbox.css'
import Card from './Card'

// Stylesheets
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const TasksMyInbox = props => {

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

  
  const dataInboxObjArray = [
    {title : "An Apple", date : "27/03/2021", description : "Online free AI English to Microsoft, IBM, Naver, Yandex and Baidu.Online free AI English to Sinhala translator powered by Google."},
    {title : "The Google", date : "20/03/2021", description : "English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.Online free AI English to Sinhala translator powered by Google."},
    {title : "The Yandex", date : "11/03/2021", description : "Online free AI English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu.English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu."},
    {title : "Microsoft", date : "27/02/2021", description : "Online free AI English to Sinhala translator powered by Google. English to Sinhala translator powered by Google, Microsoft, IBM, Naver, Yandex and Baidu."}
  ]
  
  return (
          <>
                {/* [UPDATES] */}
                  <div className="col-12 ">
                    <h4>Inbox</h4>
                    <div className="myStyle__hr mt-1 mb-1"></div>
                    
                      {/* card container */}
                      <div className=" col-12">
                          <div className="myContainer overflow-auto">
                          {dataInboxObjArray.map((item, i) => <Card key={i} date={item.date} title={item.title} description ={item.description} />)}
                     
                          </div>
                      </div>
                  </div>
          </>  
    
  )
}

export default TasksMyInbox
