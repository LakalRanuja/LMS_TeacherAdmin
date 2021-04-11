import React from 'react'
import { Card, CardBody, CardText, Button, Row, Col, Container, Label, Input, FormGroup, ButtonGroup } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, ChevronDown, ChevronUp, Phone, Mail, Send } from 'react-feather'
const StudentCardRow = ({title = "", detail = "", iconName}) => {
     let Icon = undefined
          switch (iconName) {
               case 'Star'.trim():
                    Icon = Star
                    break
               case 'Email'.trim():
                    Icon = Send
                    break 
               case 'Phone'.trim():
                    Icon = Phone
                    break       
               case 'Mail'.trim():
                    Icon = Mail
                    break
               case 'Phone'.trim():
                    Icon = Phone
                    break

               default:
                    Icon = Star
                     break
          }

     return (
          <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title col-12 col-md-3'>
                      <Icon className='mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        {title}
                      </CardText>
                    </div>
                    <CardText className='col-12 col-md-8 pl-3 pl-md-0  '>{detail}</CardText>
               </div>
     )
}

export default StudentCardRow
