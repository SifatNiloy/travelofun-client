import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo2.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand className='py-0 my-0' href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/packages" >Packages</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/offers">Offers</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
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