// ** React Imports
import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col, Container, Label, Input, FormGroup, ButtonGroup } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, ChevronDown, ChevronUp, Phone, Mail } from 'react-feather'

import '../components/styles/taskStudentDetails.css'
import StudentCardRow from '../components/StudentCardRow'

const TasksStudentDetails = props => {

  const [toggleUpperPanal, setToggleUpperPanal] = useState(false)

  const subjectObjArray = [
                            {subject : "Mathematics", mark : 78, type : null, name : null}, 
                            {subject : "Sinhala", mark : 79, type : null, name : null}, 
                            {subject : "History", mark : 62, type : null, name : null}, 
                            {subject : "English", mark : 66, type : null, name : null}, 
                            {subject : "ICT", mark : 89, type : null, name : null}, 
                            {subject : "Science", mark : 77, type : null, name : null}, 
                            {subject : "Art", mark : 55, type : null, name : null}
                          ]

  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return <img src={selectedUser.avatar} alt='user-avatar' className='img-fluid rounded' height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded d-md-flex  col-12 col-sm-12 col-md-2  mb-1'
          content={"Ruvindu Madushanka"}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    }
  }

  return (
    <div className=" p-1 myStyleContainer">
        <div className="">
          {/* <h6>Index No</h6>
          <h6>Student Name</h6>
          <h6>Email</h6>
          <h6>Parent Full Name</h6>
          <h6>Parent Contact Number</h6> */}

          <Card >
          <CardBody>
            <Row>
              <Col  xl='12' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
                <div className='user-avatar-section'>
                  <div className='d-md-flex justify-content-start'>
                    {/* {renderUserImg()} */}
                    <div className='d-md-flex flex-column ml-1   '>
                      <div className='user-info mb-1 mt-0'>
                        <h4 className='mb-0 text-primary '>{"Ruvindu Madushanka"}</h4>
                       
                          <CardText tag='span' className="mb-1">
                            {'madushanka2021@gmail.com'}
                          </CardText>
                        
                          <div className='d-md-flex flex-wrap align-items-center mt-1'>
                            <Button.Ripple className="mr-1" tag={Link} to={`/apps/user/edit/`} color='primary'>
                              Edit 
                            </Button.Ripple>

                            <Button.Ripple tag={Link} to={`/apps/user/edit/`} color='light'>
                              Delete
                            </Button.Ripple>
                          </div>

                      </div>
                    
                    </div>
                  </div>
                </div>
                <div className=" col-12">
                            <button className="btn btn-light col-12 p-0" onClick={() => setToggleUpperPanal(!toggleUpperPanal)}>
                               {toggleUpperPanal ?  <ChevronUp className='' size={16} /> :  <ChevronDown className='' size={16} />}
                            </button>
                          </div>
              </Col>
              {/* break > */}
              {toggleUpperPanal ?  <Col xl='7' lg='12' className='mt-2 mt-xl-2'>
                
                <div className='user-info-wrapper'>            
                <StudentCardRow iconName = "Star" title = "FullName" detail= "Ruvindu Madushanka" />
                  
                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title col-12 col-md-3'>
                      <Star className='mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        NIC No
                      </CardText>
                    </div>
                    <CardText className='text-capitalize col-12 col-md-8 pl-3 pl-md-0 '>
                      {"9977665521V"}
                    </CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title col-12 col-md-3'>
                      <TrendingUp className='mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        Date of Birth
                      </CardText>
                    </div>
                    <CardText className='text-capitalize col-12 col-md-8 pl-3 pl-md-0 '>
                      {'2000/01/01'}
                    </CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title col-12 col-md-3'>
                      <Mail className='mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        Email
                      </CardText>
                    </div>
                    <CardText className='col-12 col-md-8 pl-3 pl-md-0  '>{"madushanka2021@gmail.com"}</CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left'>
                    <div className='user-info-title col-12 col-md-3 '>
                      <Phone className='mr-1 ' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        Contact
                      </CardText>
                    </div>
                    <CardText className='col-12 col-md-8 pl-3 pl-md-0 '>{ '(+94) 772233121'}</CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title  col-12 col-md-3 '>
                      <Mail className=' mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        Address
                      </CardText>
                    </div>
                    <CardText className=' col-12 col-md-8 pl-3 pl-md-0 '>{"199 / A / 22, Sananayaka, Kuruduwaththa, Araliya Road, Colombo, 56000"}</CardText>
                  </div>

                </div>
              </Col> : null}
            </Row>
          </CardBody>
        </Card>

        {/* middle content */}
          <div className = " myStyle__middleUpperBorder px-3 col-12">
              <h3 className= " ">Progress Report</h3>

              {/* terms button */}
              <ButtonGroup size= "sm" className = "myStyle__termBtnGroup">
                <Button color= "primary"  className = "">Terms 01</Button>
                <Button color= "primary"  className = "">Terms 02</Button>
                <Button color= "primary"  className = "">Terms 03</Button>
              </ButtonGroup>
              <div className="border-bottom "></div>

                {/* textfield container */}
                <div className = "_myScrollStype overflow-auto col-12">
                  <div className = "row mt-1  ">
                    {/* { subjectObjArray.map((item, index) => <TextField subject = {item.subject} placeholder="..." key = {index} mark={item.mark}/>)  } */}
                    { subjectObjArray.map((item, index) => {
                                return   <div key={`${index}${item.subject}`} className="col-3 mb-0">
                                            <FormGroup>
                                                  <Label for={item.subject}>{item.subject}</Label>
                                                  <Input  type={item.type ? item.type : "email"} value={item.mark ? item.mark : ""}  name={item.name ?  item.name : "email"} id={item.subject ? item.subject : ""} placeholder={"........"} />
                                            </FormGroup>
                                          </div>
                    })  }
                     
                  </div>
                

                 {/* button group */}
                <div className="p-0 my-1 text-left col-12">
                    <Button size="sm" outline  color="primary"  className="mr-1">submit</Button>
                    <Button size="sm" outline  color="primary"  className="mr-1">update</Button>
                    <Button size="sm" outline  color="primary" disabled className="mr-1">cancel</Button>
                </div>

                {/* average, marks , total */}
                <div className=" my-3 px-0 ml-0 col-12">
                     <div className="row  col-10"><h6 className=" ml-0 col-2 font-weight-bold"> Total Marks </h6> <h6 className="col-4 text-primary" text-danger>620</h6> </div>
                     <div className="row col-10"><h6 className=" ml-0 col-2 font-weight-bold"> Average </h6> <h6 className="col-4 text-primary">65.28</h6> </div>
                     <div className="row col-10"><h6 className=" ml-0 col-2 font-weight-bold"> Place </h6> <h6 className="col-4 text-danger">04</h6>  </div>
                </div>
              </div>
          </div>

        </div>
    </div>
  )
}

export default TasksStudentDetails
