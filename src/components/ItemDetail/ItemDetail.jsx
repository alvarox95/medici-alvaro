import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) => {

    const onAdd = (cantidad) => {
      alert('Se agregaron ' + cantidad + ' productos al carrito') 
  };
  return (
    <Card style={{ width: '16rem' }} className='mb-3'>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.detail}
        </Card.Text>
        <Card.Text>
          $ {data.price}
        </Card.Text>
        <ItemCount ItemCount initial={1} stock = {5} onAdd = {onAdd} />
      </Card.Body>
    </Card>
    );
};

export default ItemDetail;