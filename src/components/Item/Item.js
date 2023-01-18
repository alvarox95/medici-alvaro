import ItemCount from '../ItemCount/ItemCount';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const item = ({games}) => {
  const onAdd = (cantidad) => {
    alert('Se agregaron ' + cantidad + ' productos al carrito') 
}
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={games.img} />
      <Card.Body>
        <Card.Title>{games.Name}</Card.Title>
        <Card.Text>
          {games.detail}
        </Card.Text>
        <Card.Text>
          $ {games.Price}
        </Card.Text>
        <ItemCount ItemCount initial={1} stock = {5} onAdd = {onAdd} />
      </Card.Body>
    </Card>
  )
}

export default item;