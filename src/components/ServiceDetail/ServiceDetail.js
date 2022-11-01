import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { packageId } = useParams();
    return (
        <div>
            <h2>This is service Detail :{packageId} </h2>

            <div>
                <Link to="/checkout"><button className='btn btn-primary'>Continue Booking</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;