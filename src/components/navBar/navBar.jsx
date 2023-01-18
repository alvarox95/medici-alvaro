import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css';



function NavBar() {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand><NavLink className='nav-link' to='/'>Zona-Gamer</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavLink className='nav-link' to='/'>Inicio</NavLink>
                <NavLink className='nav-link'>Productos</NavLink>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item><NavLink className='nav-link' to='/Categoria/Juegos'>Juegos</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink className='nav-link' to='/Categoria/Libro'>Libros</NavLink></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <NavLink><CartWidget/></NavLink>
        </Container>
    </Navbar>
    );
    }

export default NavBar;