import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';


const Orders = () => {
    
    const [orders, setOrders]=useState([]);
    useEffect(()=>{
        const getOrders=async()=>{
            const url=`http://localhost:5000/order`;
            const {data}= await axios.get(url);
            setOrders(data);
            
        }
        getOrders();
        // console.log(orders)
    },[])
    return (
        <div >
            <h2 className='text-center my-5'>All Orders: {orders.length}</h2>
            <div className='container'>
                <div className='package-container '>
                    {
                        orders.map(order=><OrderCard key={order._id} order={order}></OrderCard> )
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;