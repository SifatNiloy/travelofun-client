import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Offers.css';
import backpack from '../../../images/products/backpack.jpg';
import pillow from '../../../images/products/pillow.jpg';
import keds from '../../../images/products/keds.jpeg';
import BudgetTravel from '../../BudgetTravel/BudgetTravel';

const Offers = () => {
  return (
    <div className="offer-page">
      <div className="py-4 container">
        <h2 className="text-center mt-2 display-4 fw-bold text-primary">Special Offers</h2>
        <div>
          <h3 className="ms-5 text-center text-dark">Unlock exclusive discounts for every season!</h3>
          <div>
            <h2 className="m-5 text-center text-success">Plan your budget travel with us</h2>
            <BudgetTravel></BudgetTravel>
          </div>
        </div>
        <h3 className="my-3 text-center text-warning">Order products from us and enjoy exclusive discounts</h3>
        <div className="row">
          <Card className="col-sm-12 col-md-6 col-lg-4 mt-2 offer-card">
            <Card.Img variant="top" src={backpack} className="offer-image" />
            <Card.Body>
              <Card.Title>Stylish Backpack</Card.Title>
              <Card.Text>
                <p className="offer-price">Price: $30</p>
              </Card.Text>
              <Button variant="primary" className="exclusive-button">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-sm-12 col-md-6 col-lg-4 mt-2 offer-card">
            <Card.Img variant="top" src={pillow} className="offer-image" />
            <Card.Body>
              <Card.Title>Comfortable Pillow</Card.Title>
              <Card.Text>
                <p className="offer-price">Price: $30</p>
              </Card.Text>
              <Button variant="primary" className="exclusive-button">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-sm-12 col-md-6 col-lg-4 mt-2 offer-card">
            <Card.Img variant="top" src={keds} className="offer-image" />
            <Card.Body>
              <Card.Title>Stylish Keds</Card.Title>
              <Card.Text>
                <p className="offer-price">Price: $30</p>
              </Card.Text>
              <Button variant="primary" className="exclusive-button">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Offers;
