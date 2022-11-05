import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Offers.css'
const Offers = () => {
    return (
        <div className=''>
            <h2 className='text-center mt-5'>Offers</h2>
            <div >
                <h3 className='ms-5'>We offer discount in various occasion and off seasons. </h3>
                <div className='travel-deal'>
                    <div className='ms-5 p-4'>
                        <h3 className='text-center my-2'>Get Free Travel Deals in Your Inbox</h3>
                        <div className='exclusive-discount'>
                            <h5 className='fw-bold'>Get exclusive discounts on everything from 5-star resorts to flights.</h5>
                            <button className='exclusive-button w-25'>Newsletters <i class="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
                <h3 className='container'>Order products from us and get special discount</h3>
                <div className='container'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Backpack</Card.Title>
                            <Card.Text>
                                <p>Price:10$</p>
                            </Card.Text>
                            <Button variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Offers;