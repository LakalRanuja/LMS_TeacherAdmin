import { Card, CardBody, CardText, Button } from 'reactstrap'
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5 style={{position: 'relative', left: 30, top: 15, fontSize: 25}}>Welcome Supun . .</h5>
        <CardText className='font-small-3' style={{position: 'relative', left: 10, top: 25, fontSize: 18}}>Your class has gain success of studies and classes .</CardText>
        <h3 className='mb-75 mt-2 pt-50'>
          {/* <a href='/' onClick={e => e.preventDefault()}>
            98 % marks
          </a> */}
        </h3>
        {/* <img className='congratulation-medal' src={medal} alt='Medal Pic' /> */}
      </CardBody>
    </Card>
  )
}

export default CardMedal
