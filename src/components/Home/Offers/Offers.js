import React from "react";
import { Button, Card } from "react-bootstrap";
import backpackImage from "../../../images/products/backpack.jpg";
import kedsImage from "../../../images/products/keds.jpeg";
import pillowImage from "../../../images/products/pillow.jpg";
import BudgetTravel from "../../BudgetTravel/BudgetTravel";

import "./Offers.css";

const productData = [
  { name: "Adventure Backpack", image: backpackImage, price: 30 },
  { name: "Comfort Pillow", image: kedsImage, price: 25 },
  { name: "Stylish Keds", image: pillowImage, price: 40 },
];

const Offers = () => {
  return (
    <div className="offer-page">
      <div className="py-4 container">
        <h2 className="text-center mt-2 display-4 fw-bold">Special Offers</h2>
        <div className="exclusive-discount text-center">
          <h3 className="ms-5">
            Explore exclusive travel deals for every season
          </h3>
          <BudgetTravel />
        </div>

        <h3 className="my-3 text-center">
          Enjoy special discounts on our selected products
        </h3>
        <div className="row">
          {productData.map((product, index) => (
            <Card
              key={index}
              className="col-sm-12 col-md-6 col-lg-4 mt-2 card-offer"
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <p className="price">Price: ${product.price}</p>
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
