import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
const MyOrders = () => {
    
    const [user]=useAuthState(auth)
    const [orders, setOrders]=useState([]);
    useEffect(()=>{
        const getOrders=async()=>{
            const myemail=user.email;
            console.log(myemail);
            const url=`http://localhost:5000/order`;
            const {data}= await axios.get(url);
            // console.log(data);
            const mydata=data.filter(allorder=>allorder.email===myemail);
            // console.log(mydata);
            setOrders(mydata);
        }
        getOrders();
        
    },[user])
    return (
        <div >
            <h2 className='text-center my-5'>All Orders: {orders.length}</h2>
            <div className='container'>
                <div className='package-container '>
                    {   
                        
                        orders.map(order=><MyOrderCard key={order._id} order={order}></MyOrderCard> )
                        
                    }
                </div>
            </div>
        </div>
    );
    
};

export default MyOrders;