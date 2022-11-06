import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-5  footer-background'>
            <div className='container'>
                <div className=' row '>

                    <div className='mt-5  text-white col-sm-12 col-md-4 col-lg-4'>
                        <h4>Stay Connected</h4>
                        <h4><i className="fa-brands fa-facebook media-button"></i>  <i className="fa-brands fa-twitter media-button"></i>  <i className="fa-brands fa-youtube media-button"></i> <i className="fa-brands fa-instagram media-button"></i> <i className="fa-brands fa-pinterest media-button"></i></h4>
                    </div>


                    <div className='text-white col-sm-12 col-md-4 col-lg-4'>
                        <h2 className=' pt-5 text-warning'>Get Free Updates</h2>
                        <p className=' mx-auto'>Enter your email address below and be the first to know about the latest Tourism Tiger website launches, news, tips, and announcements</p>
                        <div className="input-group mb-3 mx-auto pb-5">
                            <input type="text" className="form-control" placeholder="your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="btn btn-primary" id="basic-addon2">Subscribe</span>
                        </div>
                    </div>

                    <div className='mt-5 text-white col-sm-12 col-md-4 col-lg-4'>
                        <h2 className='ps-4'>Contact Us</h2>
                        <ul className='footer-ul' >
                            <li><i className="fa-solid fa-location-dot"></i> Bannai Condominium, House #10, <br /> road #12, Dhaka.</li>
                            <li><i className="fa-solid fa-location-arrow"></i> Get direction on google map</li>
                            <li><i className="fa-solid fa-envelope"></i> travellofun@gmail.com</li>
                        </ul>

                    </div>
                </div>
                <p className='text-white text-center pb-1'><small>Copyright © 2022. Travelofun . All rights reserved.</small></p>
            </div>
        </div >


    );
};

export default Footer;