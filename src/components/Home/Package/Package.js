import React from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Package.css";
const Package = ({ singlePackage }) => {
  const { _id, name, image, price, description, duration } = singlePackage;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/package/${id}`);
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <Card className="custom-card" style={{ width: "22rem" }}>
        <Card.Img variant="top" src={image} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-description">{description}</Card.Text>
        </Card.Body>

        <Card.Body className="card-footer text-center">
          <div className="card-package-footer">
            <h4 className="price-button">${price}</h4>
            <h4>{duration}</h4>
          </div>
          <Link
            to={`/service/${_id}`}
            className="btn btn-primary btn-custom"
            onClick={() => navigateToServiceDetail(_id)}
          >
            Book now <i className="fas fa-arrow-right"></i>
          </Link>
        </Card.Body>
      </Card>
    </div>
    // <div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
    //     <Card className='' style={{ width: '22rem' }}>
    //         <Card.Img variant="top" src={image} />
    //         <Card.Body>
    //             <Card.Title>{name}</Card.Title>
    //             <Card.Text >
    //                 {description}
    //             </Card.Text>
    //         </Card.Body>

    //         <Card.Body className='card-footer text-center'>
    //             <div className='card-package-footer '>
    //                 <h4 className='price-button'> {price} </h4>
    //                 <h4 >{duration} </h4>
    //             </div>
    //             <Card.Link className='btn btn-primary ' onClick={() => navigateToServiceDetail(_id)}>Book now</Card.Link>
    //         </Card.Body>
    //     </Card>
    // </div>
  );
};

export default Package;
