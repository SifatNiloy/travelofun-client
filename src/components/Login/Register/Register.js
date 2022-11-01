import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password)
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='login-title'>Please register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="name" placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already have an account ? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Sign Up</Link></p>
        </div>
    );
};

export default Register;