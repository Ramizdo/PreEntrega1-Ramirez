import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <div className="estilo-menu">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='color-menu' href="#home">HOME</Nav.Link>
                        <Nav.Link className='color-menu' href="#Mlb">MLB</Nav.Link>
                        <Nav.Link className='color-menu' href="#Nba">NBA</Nav.Link>
                        <Nav.Link className='color-menu' href="#Nfl">NFL</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;