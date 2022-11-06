import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Offers.css'
import backpack from '../../../images/products/backpack.jpg'
import pillow from '../../../images/products/pillow.jpg'
import keds from '../../../images/products/keds.jpeg'
import BudgetTravel from '../../BudgetTravel/BudgetTravel';
const Offers = () => {
    return (
        <div className="offer-page">
            <div className=' py-4 container'>
                <h2 className='text-center mt-2 display-4 fw-bold'>Offers</h2>
                <div >
                    <h3 className='ms-5 text-center'>We offer discount in various occasion and off seasons. </h3>

                    <div>
                        <h2 className='m-5 text-center'>Get special discount on every season </h2>
                        <BudgetTravel></BudgetTravel>


                    </div>
                </div>
                <h3 className=' my-3 text-center'>Order products from us and get special discount</h3>
                <div className='row'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 mt-2' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={backpack} />
                        <Card.Body>
                            <Card.Title>Backpack</Card.Title>
                            <Card.Text>
                                <p>Price:30$</p>
                            </Card.Text>
                            <Button variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 mt-2' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pillow} />
                        <Card.Body>
                            <Card.Title>Backpack</Card.Title>
                            <Card.Text>
                                <p>Price:30$</p>
                            </Card.Text>
                            <Button variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 mt-2' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={keds} />
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
        </div>

    );
};

export default Offers;