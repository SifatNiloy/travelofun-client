import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './BudgetTravel.css'
const BudgetTravel = () => {
    return (
        <div className=' budget-travel'>
            <div className='container text-center pb-5'>
            <h1 className='text-center my-5'>Budget Travel</h1>
            <p className='text-center'>An affordable vacation shouldn't feel cheap. We show you how to plan a dream trip that keeps your wallet happy.</p>
            <h1 className='container'>Save up to 50% on Hotels</h1>
            <p>Use our coupon code and get the deal</p>
            <div>
                <div className='container'>
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>summer pack</Card.Title>
                            <Card.Text>
                                <h4>4 members</h4>
                                <h4>discount:200$ </h4>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>winter pack</Card.Title>
                            <Card.Text>
                                <h4>6 members</h4>
                                <h4>discount:250$ </h4>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>spring pack</Card.Title>
                            <Card.Text>
                                <h4>3 members</h4>
                                <h4>discount:100$ </h4>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BudgetTravel;