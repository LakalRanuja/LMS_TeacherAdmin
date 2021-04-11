import Avatar from '@components/avatar'
import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown, User } from 'react-feather'

const CompanyTable = () => {
  const data = [
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'John',
        
        category: '2001-03-10',
        views: 'Mr.Kamal',
        revenue: '0771234568'
        
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Motels',
        
        category: '1999-08-20',
        views: 'Mr.Nimal',
        revenue: '0771234560'
        
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Sunny',
        
        category: '2005-03-22',
        views: 'Mr.Dilani',
        revenue: '0771234560'
       
        
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Wicky',
        
        category: '2006-10-01',
        views: 'Mr.Sampath',
        revenue: '0771234560'
      
       
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Sharuk',
        
        category: '2007-05-15',
        views: 'Mr.Somasiri',
        revenue: '0771234560'
        
        
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Alise',
        email: 'Alise@hodzi.co.uk',
        category: '2001-03-10',
        views: 'Mr.Vajira',
        revenue: '0771234560'
        
        
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Dom',
        email: 'Dom@hodzi.co.uk',
        category: '2001-03-10',
        views: 'Mr.Damith',
        revenue: '07712341560'
        
      }
    ],
    colorsArr = {
      Technology: 'light-primary',
      Grocery: 'light-success',
      Fashion: 'light-warning'
    }

  const renderData = () => {
    return data.map(col => {
      const IconTag = col.salesUp ? (
        <TrendingUp size={15} className='text-success' />
      ) : (
        <TrendingDown size={15} className='text-danger' />
      )

      return (
        <tr key={col.name}>
          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar rounded'>
                <div className='avatar-content'>
                  <img src={col.img} alt={col.name} />
                </div>
              </div>
              <div>
                <div className='font-weight-bolder'>{col.name}</div>
                <div className='font-small-2 text-muted'>{col.email}</div>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <span>{col.category}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='font-weight-bolder mb-25'>{col.views}</span>
              <span className='font-small-2 text-muted'>{col.time}</span>
            </div>
          </td>
          <td>{col.revenue}</td>
          {/* <td> */}
            {/* <div className='d-flex align-items-center'>
              {/* <span className='font-weight-bolder mr-1'>{col.sales}</span> */}
              {/* {IconTag} */}
            {/* </div> */}
          {/* </td> */}
        </tr>
      )
    })
  }

  return (
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Parent</th>
            <th>Parent Contact</th>
            {/* <th>Status</th> */}
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
