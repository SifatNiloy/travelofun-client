import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const agree = event.target.terms.checked;

        createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');


    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='login-title  text-center mt-5 mb-3'>Please register</h2>
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
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' className={agree ? 'opacity-100' : 'opacity-50'} label="Accept Our terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!agree}>
                    Sign Up
                </Button>
            </Form>
            <p className='mt-2'>Already have an account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Log in</Link></p>
        </div>
    );
};

export default Register;