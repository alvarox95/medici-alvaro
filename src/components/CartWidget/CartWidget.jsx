import './CardWidget.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
        <Button variant="danger">
            <i className="bi bi-cart fs-5">
            <Badge bg="dark" className='badgecart'>7</Badge>
            </i>
        </Button>
    )
}

export default CartWidget;