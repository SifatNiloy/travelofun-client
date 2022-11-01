import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo2.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to="/packages" >Packages</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/offers">Offers</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">My Orders</Nav.Link>
                        <Nav.Link href="#deets">Manage all Orders</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div>
        //     <h2>This is header</h2>
        //     <nav>
        //         <Link to='/'>Home</Link>
        //     </nav>
        // </div>
    );
};

export default Header;