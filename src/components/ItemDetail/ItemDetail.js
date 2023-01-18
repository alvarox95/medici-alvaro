import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({dataI}) => {

    const onAdd = (cantidad) => {
      alert('Se agregaron ' + cantidad + ' productos al carrito') 
  };
  return (
    <Card style={{ width: '16rem' }} className='mb-3'>
      <NavLink><Card.Img variant="top" src={dataI.img} /></NavLink>
      <Card.Body>
        <Card.Title><NavLink>{dataI.Name}</NavLink></Card.Title>
        <Card.Text>
          {dataI.detail}
        </Card.Text>
        <Card.Text>
          $ {dataI.Price}
        </Card.Text>
        <ItemCount ItemCount initial={1} stock = {5} onAdd = {onAdd} />
      </Card.Body>
    </Card>
    );
};

export default ItemDetail;