import React from 'react';
import './Support.css'
import support from '../../../src/images/others/support.jpg'
const Support = () => {
    return (
        <div className=' container'>
            <h1 className='text-center'>Customer Support</h1>
            <div className='support'>
                <div className='mt-5 pt-5'>
                    <h4>We want our customers satisfaction</h4>
                    <p>Every person is valuable to us. We want everyone to provide our best support . If anything is unclear, you can contact us anytime . Our team's services remain at your disposition after the implementation to answer any question, resolve any doubt and even make small adjustments. This means that as a new TravelOperations user, you can call us whenever you need it, and you will always get personalized advice and guidance. </p>
                </div>
                <div>
                    <img className='w-75' src={support} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Support;