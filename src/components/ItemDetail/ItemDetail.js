import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) => {

    const onAdd = (cantidad) => {
      alert('Se agregaron ' + cantidad + ' productos al carrito') 
  };
  return (
    <Card style={{ width: '16rem' }} className='mb-3'>
      <NavLink><Card.Img variant="top" src={data.img} /></NavLink>
      <Card.Body>
        <Card.Title><NavLink>{data.Name}</NavLink></Card.Title>
        <Card.Text>
          {data.detail}
        </Card.Text>
        <Card.Text>
          $ {data.Price}
        </Card.Text>
        <ItemCount ItemCount initial={1} stock = {5} onAdd = {onAdd} />
      </Card.Body>
    </Card>
    );
};

export default ItemDetail;