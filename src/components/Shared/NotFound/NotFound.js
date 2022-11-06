import React from 'react';
import sleeping from '../../../images/others/sleeping.png'
const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='mt-5'>The page you are looking for was not found</h2>
            <img  src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;