import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Booking.css';
import auth from '../../firebase.init';
const Booking = () => {
    const { packageId } = useParams();
    const [singlepackage, setSinglepackage] = useState({});
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/package/${packageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglepackage(data));
    })
    const handlePlaceOrder=event=>{
        event.preventDefault();
        const order={
            email:user.email,
            package: singlepackage.name,
            packageId:packageId,
            address:event.target.address.value,
            phone:event.target.phone.value,

        }
    }
    return (
        <div className='text-center py-5 details'>
            <img style={{"height":"300px", "borderRadius":"15px"}} src={singlepackage.image} alt="" />
            <h2>Book :{singlepackage.name} </h2>
            <p>{singlepackage.description}</p>
            

            <div className='my-4 pt-3'>
                <Link to="/checkout"><button className='btn btn-primary '>Continue Booking</button></Link>
            </div>
            <div>
                <form onSubmit={handlePlaceOrder}>
                    <input className='w-50 mb-2 p-2' type="text" name='package name' placeholder='package name' value={user?.displayName} required readOnly/><br />
                    <input className='w-50 mb-2 p-2' type="text" name='name' placeholder='user name' value={singlepackage.name} required /><br />
                    <input className='w-50 mb-2 p-2' type="email" name='email' placeholder='email' value={user?.email} required disabled/><br />
                    <input className='w-50 mb-2 p-2' type="text" autoComplete='off' name='phone' placeholder='phone' required /><br />
                    <input className='w-50 mb-2 p-2' type="text" autoComplete='off' name='address' placeholder='address' required /><br />
                    <input className='w-50 mb-2 p-2' type="text" name='gender' placeholder='gender' required /><br />
                    <input className='w-50 mb-2 p-2 btn btn-primary' type="submit" value="Book Now" />
                </form>
            </div>
        </div>
    );
};

export default Booking;