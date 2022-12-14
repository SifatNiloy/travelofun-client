import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Booking.css';
import auth from '../../firebase.init';
import axios from 'axios';
const Booking = () => {
    const { packageId } = useParams();
    const [singlepackage, setSinglepackage] = useState({});
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        const url = `https://travelofun-server.onrender.com/${packageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglepackage(data));
    })
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            packagename: singlepackage.name,
            image: singlepackage.image,
            description: singlepackage.description,
            price: singlepackage.price,
            duration: singlepackage.duration,
            packageId: packageId,
            address: event.target.address.value,
            phone: event.target.phone.value,
            status: "pending",

        }
        axios.post('https://secure-shelf-54719.herokuapp.com/order', order)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    alert('your order is booked ')
                }
            })
    }
    return (
        <div className='text-center py-5 details'>
            <img style={{ "height": "300px", "borderRadius": "15px" }} src={singlepackage.image} alt="" />
            <h4 className='mt-3'>Book :{singlepackage.name} </h4>
            <h4>price :{singlepackage.price} </h4>
            <p>{singlepackage.description}</p>


            {/* <div className='my-4 pt-3'>
                <Link to="/checkout"><button className='btn btn-primary '>Continue Booking</button></Link>
            </div> */}
            <div>
                <form onSubmit={handlePlaceOrder}>
                    <input className='w-50 mb-2 p-2' type="text" name='name' placeholder='package name' value={singlepackage.name} required readOnly /><br />
                    <input className='w-50 mb-2 p-2' type="text" name='username' placeholder='Your name' value={user?.displayName} required /><br />
                    <input className='w-50 mb-2 p-2' type="email" name='email' placeholder='email' value={user?.email} required readOnly /><br />
                    <input className='w-50 mb-2 p-2' type="text" autoComplete='off' name='phone' placeholder='phone' required /><br />
                    <input className='w-50 mb-2 p-2' type="text" autoComplete='off' name='address' placeholder='address' required /><br />
                    <input className='w-50 mb-2 p-2' type="text" name='gender' placeholder='gender' /><br />
                    <input className='w-50 mb-2 p-2 btn btn-primary' type="submit" value="Book Now" />
                </form>
            </div>
        </div>
    );
};

export default Booking;