import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Package.css';
const Package = ({ singlePackage }) => {
    const { id, name, image, price } = singlePackage;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/package/${id}`)
    }
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>

            <Card.Body className='card-footer'>
                <p >price: {price} </p>
                <Card.Link className='btn btn-primary' onClick={() => navigateToServiceDetail(id)}>Book now</Card.Link>
            </Card.Body>
        </Card>
        // <div>
        //     <h2>Place:  {name}</h2>
        //     <img src={image} alt="" />
        //     <h2>Place:  {price}</h2>
        // </div>
    );
};

export default Package;