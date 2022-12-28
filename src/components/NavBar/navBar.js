import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">ZONA GAMER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">PC Armadas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Notebook / laptops </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Complementos</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#cart"><CartWidget/></Nav.Link>
        </Container>
    </Navbar>
    );
    }

export default NavBar;