import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Package.css';
const Package = ({ singlePackage }) => {
    const {_id, name, image, price, description, duration } = singlePackage;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/package/${id}`)
    }
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text >
                    {description}
                </Card.Text>
            </Card.Body>

            <Card.Body className='card-footer text-center'>
                <div className='card-footer-package '>
                    <h4 > {price} </h4>
                    <h4 >{duration} </h4>
                </div>
                <Card.Link className='btn btn-primary ' onClick={() => navigateToServiceDetail(_id)}>Book now</Card.Link>
            </Card.Body>
        </Card>

    );
};

export default Package;