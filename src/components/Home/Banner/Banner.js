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
                        <h1 className='fw-bold display-4'>Air Balloon Rides</h1>
                        <p>Ride Ballon from above the landscape, enjoy the sunset</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={sunset} alt="" />

                <Carousel.Caption className='pb-5 mb-5'>
                    <div className='pb-5 mb-5'>
                        <h1 className='fw-bold display-4'>Explore Famous cities</h1>
                        <p>Explore famous cities, meet new people, new culture</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={building} alt="" />

                <Carousel.Caption className='pb-5 mb-5'>
                    <div className='pb-5 mb-5'>
                        <h1 className='fw-bold display-4'>See Great Architectures</h1>
                        <p>
                            Great Building Architectures created my mankind
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;