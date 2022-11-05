import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Offers.css'
import backpack from '../../../images/products/backpack.jpg'
import BudgetTravel from '../../BudgetTravel/BudgetTravel';
const Offers = () => {
    return (
        <div className='offer-page py-4'>
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
                <div>
                    <h2 className='m-5'>Get special discount on every season </h2>
                    <BudgetTravel></BudgetTravel>


                </div>
            </div>
            <h3 className='container my-5'>Order products from us and get special discount</h3>
            <div className='container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={backpack} />
                    <Card.Body>
                        <Card.Title>Backpack</Card.Title>
                        <Card.Text>
                            <p>Price:30$</p>
                        </Card.Text>
                        <Button variant="primary">Buy now</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
        
    );
};

export default Offers;