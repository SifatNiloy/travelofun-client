import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-5 footer footer-background'>

            <div className='mt-5 text-white'>
                <div>
                    <h4>Stay Connected</h4>
                    <h4><i class="fa-brands fa-facebook"></i>  <i class="fa-brands fa-twitter"></i>  <i class="fa-brands fa-youtube"></i> <i class="fa-brands fa-instagram"></i></h4>
                </div>
            </div>
            <div >
                <div className='text-white'>
                    <h2 className=' pt-5 text-warning'>Get Free Updates</h2>
                    <p className=' mx-auto'>Enter your email address below and be the first to know about the latest Tourism Tiger website launches, news, tips, and announcements</p>
                    <div className="input-group mb-3 mx-auto pb-5">
                        <input type="text" className="form-control" placeholder="your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="btn btn-primary" id="basic-addon2">Subscribe</span>
                    </div>
                </div>
            </div>
            <div className='mt-5 text-white'>
                <h2>Contact Us</h2>
                <ul >
                    <li><i class="fa-solid fa-location-dot"></i> Bannai Condominium, House #10, <br /> road #12, Dhaka.</li>
                    <li><i class="fa-solid fa-location-arrow"></i> Get direction on google map</li>
                    <li><i class="fa-solid fa-envelope"></i> travellofun@gmail.com</li>
                </ul>

            </div>
        </div>
    );
};

export default Footer;