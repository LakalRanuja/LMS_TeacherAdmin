// ** React Imports
import { Fragment } from 'react'

import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { deleteInvoice } from '../store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledTooltip
} from 'reactstrap'
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart,
  FileText
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-50' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='mr-50' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columns = [
  {
    name: 'Index No',
    minWidth: '110px',
    selector: 'id',
    cell: row => row.id
  },
  // {
  //   name: <TrendingUp size={14} />,
  //   minWidth: '102px',
  //   selector: 'invoiceStatus',
  //   sortable: true,
  //   cell: row => {
  //     const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary',
  //       Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Edit
  //     return (
  //       <Fragment>
  //         <Avatar color={color} icon={<Icon size={14} />} id={`av-tooltip-${row.id}`} />
  //         <UncontrolledTooltip placement='top' target={`av-tooltip-${row.id}`}>
  //           <span className='font-weight-bold'>{row.invoiceStatus}</span>
  //           <br />
  //           <span className='font-weight-bold'>Balance:</span> {row.balance}
  //           <br />
  //           <span className='font-weight-bold'>Due Date:</span> {row.dueDate}
  //         </UncontrolledTooltip>
  //       </Fragment>
  //     )
  //   }
  // },
  {
    name: 'Student Name',
    minWidth: '320px',
    selector: 'student',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe',
        email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
  {
    name: 'Email',
    minWidth: '280px',
    selector: 'email',
    sortable: true,
    cell: row => "anandacollege45@gmail.com"
  },
  {
    name: 'Parent Full Name',
    minWidth: '200px',
    selector: 'parentName',
    sortable: true,
    cell: row => { return row.client ? row.client.name : 'John wick' }
  },
  {
    name: 'Parent Contact Number',
    minWidth: '190px',
    selector: 'parentContact',
    sortable: true,
    cell: row => "077 3345734"
  },
  {
    name: 'Actions',
    minWidth: '40px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/apps/manageclass/view/studentdetails`}
            className='w-100'
            onClick={() => ""}
            // onClick={() => store.dispatch(getUser(row.id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem> 
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
