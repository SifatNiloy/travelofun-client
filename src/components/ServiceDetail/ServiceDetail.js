import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';
const ServiceDetail = () => {
    const { packageId } = useParams();
    const [singlepackage, setSinglepackage] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/package/${packageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglepackage(data));
    })
    return (
        <div className='text-center py-5 details'>
            <h2>Book :{singlepackage.name} </h2>
            <p className='text-info'>{singlepackage.description}</p>
            <img style={{"height":"400px", "borderRadius":"15px"}} src={singlepackage.image} alt="" />

            <div className='my-4 pt-3'>
                <Link to="/checkout"><button className='btn btn-primary '>Continue Booking</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;