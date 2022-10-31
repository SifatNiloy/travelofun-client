import React from 'react';
import { Carousel } from 'react-bootstrap';
import ballon from '../../../images/banner/ballon.jpg';
import building from '../../../images/banner/building.jpg';
import sunset from '../../../images/banner/sunset.jpg'
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src={ballon} alt="" />
                <Carousel.Caption className='pb-5 mb-5'>
                    <div className='pb-5 mb-5'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={sunset} alt="" />

                <Carousel.Caption className='pb-5 mb-5'>
                    <div className='pb-5 mb-5'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={building} alt="" />

                <Carousel.Caption className='pb-5 mb-5'>
                    <div className='pb-5 mb-5'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;