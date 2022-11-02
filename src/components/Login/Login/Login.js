import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (loading ) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigateRegister = event => {
        navigate('/register');

    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='login-title  text-center mt-5 mb-3'>please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
            <p className='mt-2'>Don't have an accout? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Sign Up</Link></p>
            <p className='mt-2'>Forgot your password ? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset password</Link></p>
        </div>
    );
};

export default Login;