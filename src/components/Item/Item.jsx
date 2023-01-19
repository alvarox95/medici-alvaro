import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const item = ({games}) => {
  const onAdd = (cantidad) => {
    alert('Se agregaron ' + cantidad + ' productos al carrito') 
}
  return (
    <Card style={{ width: '16rem' }} className='mb-3'>
      <Link to={`item/${games.id}`}><Card.Img variant="top" src={games.img} /></Link>
      <Card.Body>
        <Link to={`item/${games.id}`}>{games.name}</Link>
        <Card.Text>
          $ {games.price}
        </Card.Text>
        <ItemCount ItemCount initial={1} stock = {5} onAdd = {onAdd} />
      </Card.Body>
    </Card>
  )
}

export default item;