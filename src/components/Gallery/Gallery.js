import React from 'react';
import tourist1 from '../../../src/images/gallery/tourist-1.jpg';
import tourist2 from '../../../src/images/gallery/tourist-2.jpg';
import tourist3 from '../../../src/images/gallery/tourist-3.jpg';
import tourist4 from '../../../src/images/gallery/tourist-4.jpg';
import tourist5 from '../../../src/images/gallery/tourist-5.jpg';
import tourist6 from '../../../src/images/gallery/tourist-6.jpg';

import './Gallery.css';
const Gallery = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-4 p-3'>GALLERY OF OUR TOURISTS</h2>
            <div className='row '>
                <img className='tourist-img col-sm-12 col-md-6 col-lg-4' src={tourist1} alt="" />
                <img className='tourist-img col-sm-12 col-md-6 col-lg-4' src={tourist2} alt="" />
                <img className='tourist-img col-sm-12 col-md-6 col-lg-4' src={tourist3} alt="" />
                <img className='tourist-img col-sm-12 col-md-6 col-lg-4' src={tourist4} alt="" />
                <img className='tourist-img col-sm-12 col-md-6 col-lg-4' src={tourist5} alt="" />
                <img className='tourist-img col-sm-12 col-md-6 col-lg-4' src={tourist6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;