import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './BudgetTravel.css'
const BudgetTravel = () => {
    return (
        <div className='container budget-travel'>
            <div className='text-center pb-5'>
                <h1 className='text-center my-5 text-info'>Budget Travel</h1>
                <h5 className='text-center text-dark'>An affordable vacation shouldn't feel cheap. We show you how to plan a dream trip that keeps your wallet happy.Get Free Travel Deals in Your Inbox.</h5>
                <h3 className='mt-5'>Save up to 50% on Hotels</h3>
                <h5>Use our coupon code and get the deal and get exclusive discounts on everything from 5-star resorts to flights.</h5>
               

                <div>
                    <div >
                        <div className='row'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 card-color mt-5 p-4 me-2' style={{ width: '20rem' }}>
                               
                                <Card.Body>
                                    <Card.Title className='text-primary'>summer pack</Card.Title>
                                    <Card.Text>
                                        <h4>4 members</h4>
                                        <h4>discount:200$ </h4>
                                    </Card.Text>
                                    <button className='btn btn-info'>View details</button>

                                </Card.Body>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 card-color mt-5 p-4 me-2' style={{ width: '20rem' }}>
                                
                                <Card.Body>
                                    <Card.Title className='text-primary'>winter pack</Card.Title>
                                    <Card.Text>
                                        <h4>6 members</h4>
                                        <h4>discount:250$ </h4>
                                    </Card.Text>
                                    <button className='btn btn-info'>View details</button>
                                </Card.Body>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 card-color mt-5 p-4 me-2' style={{ width: '20rem' }}>
                                
                                <Card.Body>
                                    <Card.Title className='text-primary'>spring pack</Card.Title>
                                    <Card.Text>
                                        <h4>3 members</h4>
                                        <h4>discount:100$ </h4>
                                    </Card.Text>
                                    <button className='btn btn-info'>View details</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BudgetTravel;