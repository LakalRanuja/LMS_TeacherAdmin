import Avatar from '@components/avatar'
import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown, User } from 'react-feather'

const CompanyTable = () => {
  const data = [
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'John',
        email: 'john@ruj.io',
        category: '11A',
        views: '98 %',
        revenue: '82.6.',
        sales: 'Good',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Motels',
        email: 'vecav@hodzi.co.uk',
        category: '11B',
        views: '97 %',
        revenue: '80.4.',
        sales: 'Good',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Sunny',
        email: 'Sunny@hodzi.co.uk',
        category: '11C',
        views: '96 %',
        revenue: '76.5.',
        sales: 'Good',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Wicky',
        email: 'Wicky@hodzi.co.uk',
        category: '11D',
        views: '95 %',
        revenue: '72.2.',
        sales: 'Good',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Sharuk',
        email: 'Sharuk@hodzi.co.uk',
        category: '11E',
        views: '94 %',
        revenue: '69.9.',
        sales: 'Good',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Alise',
        email: 'Alise@hodzi.co.uk',
        category: '11F',
        views: '93 %',
        revenue: '63.5.',
        sales: 'Good',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Dom',
        email: 'Dom@hodzi.co.uk',
        category: '11G',
        views: '92 %',
        revenue: '58.7.',
        sales: 'Good',
        salesUp: true
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
              <Avatar className='mr-1' color={colorsArr[col.category]} icon={col.icon} />
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
          <td>
            <div className='d-flex align-items-center'>
              <span className='font-weight-bolder mr-1'>{col.sales}</span>
              {IconTag}
            </div>
          </td>
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
            <th>Grade & Class</th>
            <th>Marks</th>
            <th>Average</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
