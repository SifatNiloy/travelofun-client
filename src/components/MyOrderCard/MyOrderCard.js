import React from 'react';
import { Card } from 'react-bootstrap';

const MyOrderCard = ({ order }) => {
    
    const { _id, packagename, image, description, price, duration, status } = order;
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this package? ');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                
            })
            window.location.reload(false);
        }
    }
    return (
        <div>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{packagename}</Card.Title>
                    <Card.Text >
                        {description}
                    </Card.Text>
                </Card.Body>

                <Card.Body className='card-footer text-center'>
                    <div className='card-footer-package '>
                        <h4 > {price} </h4>
                        <h4 >{duration} </h4>
                        <h4 >{status} </h4>
                        <button className='btn btn-primary' onClick={()=>handleDelete(_id)}>delete</button>
                      
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default MyOrderCard;