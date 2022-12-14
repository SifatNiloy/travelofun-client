import React from 'react';
import { Card } from 'react-bootstrap';

const OrderCard = ({ order }) => {
    let { _id, packagename, image, description, price, duration, status } = order;

    // Change status and update data from database function
    const updatePackage = id => {

        order.status = "approved";
        const url = `https://secure-shelf-54719.herokuapp.com/order/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        }).then(console.log(order));
        window.location.reload(false);
    };
    //delete order on button click 

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this package? ');
        if (proceed) {
            const url = `https://secure-shelf-54719.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
            window.location.reload(false);
        }
    }
    function buttonChange() {
        if (status === "pending") {
            const cardFooterStatus = <button onClick={updatePackage} className='btn btn-primary'>{status}</button>
            return cardFooterStatus;

        }
        else {

            const cardFooterStatus = <h4><i class="fa-solid fa-circle-check"></i> &nbsp;approved</h4>;
            return cardFooterStatus;

        }
    }
    const cardbutton = buttonChange();
    return (
        <div>

            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{packagename}</Card.Title>
                    <Card.Text >
                        {description}
                    </Card.Text>
                </Card.Body>

                <Card.Body className='card-footer text-center'>
                    <div className='card-footer-package '>
                        <h4 > {price} </h4>
                        <h4 >{duration} </h4>
                    </div>
                    <div className='card-footer-package '>
                        <h4>{cardbutton} </h4>
                        <h4 ><button className='btn btn-primary' onClick={() => handleDelete(_id)}>delete</button> </h4>


                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderCard;