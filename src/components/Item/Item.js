import ItemCount from '../ItemCount/ItemCount';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-bootstrap';


const item = ({games}) => {
  const onAdd = (cantidad) => {
    alert('Se agregaron ' + cantidad + ' productos al carrito') 
}
  return (
    <Card style={{ width: '16rem' }} className='mb-3'>
      <NavLink><Card.Img variant="top" src={games.img} /></NavLink>
      <Card.Body>
        <Card.Title><NavLink to=''>{games.Name}</NavLink></Card.Title>
        {/* <Card.Text>
          {games.detail}
        </Card.Text> */}
        <Card.Text>
          $ {games.Price}
        </Card.Text>
        <ItemCount ItemCount initial={1} stock = {5} onAdd = {onAdd} />
      </Card.Body>
    </Card>
  )
}

export default item;