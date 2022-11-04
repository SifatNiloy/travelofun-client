import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const OrderCard = ({ order }) => {
    let { _id, email, packagename, image, description, price, duration, status } = order;

    // Change status and update data from database function
    const updatePackage = event => {
        
        event.preventDefault();
        order.status = "approved";
        const url = `http://localhost:5000/package/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        }).then();
    };
    return (
        <div>
            {/* <h1>this is order:{email} </h1> */}
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
                    </div>
                    <div className='card-footer-package '>
                        <h4 >  </h4>
                        <button onClick={() => updatePackage(_id)} className='btn btn-primary'>{status}</button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderCard;