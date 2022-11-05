import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
    const location= useLocation();
    let from = location.state?.from?.pathname || "/" ;

    let errorElement;
    if (error) {
        
         errorElement=  <p className='text-danger'>Error: {error.message}</p>   ;
    }
    if (loading ) {
        return <Loading></Loading>
    }
    if(user){
        navigate(from, {replace:true});
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>  </div>
                <p className='mt-3 px-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'> </div>
            </div>
            
            <div className='mb-4'>
                <button onClick={() => signInWithGoogle()} className='btn btn-danger d-block w-50 mx-auto'>
                <i class="fa-brands fa-google"></i>  &nbsp; 
                    Google Sign In
                </button>
            </div>
            {errorElement}
            
        </div>
    );
};

export default SocialLogin;