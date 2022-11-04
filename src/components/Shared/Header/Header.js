import React from 'react';
import {signOut} from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo2.png'

const Header = () => {
    const [user]= useAuthState(auth);
    const handleSignOut=()=>{
       signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to="/packages" >packages</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/offers">Offers</Nav.Link>

                    </Nav>
                    <Nav>
                       
                        
                        {
                            user&& <>
                            <Nav.Link as={Link} to="/addpackage">Add</Nav.Link>
                            {/* <Nav.Link as={Link} to="/managepackages">Manage all Orders</Nav.Link> */}
                            <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/manageorders">Manage all Orders</Nav.Link>
                            
                            </>
                        }
                        {
                            user?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

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