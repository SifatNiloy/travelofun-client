import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';


const Orders = () => {
    
    const [orders, setOrders]=useState([]);
    useEffect(()=>{
        const getOrders=async()=>{
            const url=`https://secure-shelf-54719.herokuapp.com/order`;
            const {data}= await axios.get(url);
            setOrders(data);
            
           
        }
        getOrders();
        
    },[])
    return (
        <div >
            <h2 className='text-center my-5'>All Orders: {orders.length}</h2>
            <div className='container my-5 py-5'>
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