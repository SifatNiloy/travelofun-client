import React from 'react';
import Support from '../Support/Support';
import './About.css'
const About = () => {
    return (
        <div className=' container'>
            <h1 className='text-center mt-5'>About us</h1>
            <p className='mb-3 about-us'>We are a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination. We provide travel management services on a global scale. It differ in terms of their size and scale, as well as the services that are on offer. We support those companies and organizations that engage in international travel and need professional help.</p>
            <Support></Support>
            <h1 className='w-50 text-warning mb-5'>FAQ</h1>
            <h3>What are online travel agencies?</h3>
            <p>An Online Travel Agency (OTA) is a website that sells services related to travel. It enables customers to make hotel and travel reservations from one single platform. They're the digital equivalent of a travel agent.

                Examples of online travel agencies include Expedia, Booking.com, and Agoda. Some OTAs—such as Kiwi.com—specialize in one single service. Others—like Skyscanner—do it all.</p>

            <h3>How do online travel agencies work?</h3>
            <p>Online travel agencies can be used by the general public for leisure travel, and by organizations for business travel. The platforms differ in what they offer, but the premise remains the same: to facilitate travel and its associated admin and costs.

                Hotels, airlines, and car hire companies pay online travel agencies to appear on their website. On the other hand, the advantage for the service provider is the added visibility that OTAs can provide.

                OTAs work by providing a streamlined approach to all things travel. It involves the customer accessing a website or platform on which they're offered a wide variety of travel options from a number of different travel and accommodation providers.

                If the airlines and hotels are the sheep, OTAs are the shepherd—they gather and present all the necessary details for consumers to make a travel decision.</p>
            <h3>What are the advantages of booking through an online travel agency?</h3>
            <p>Here are some of the benefits of booking travel services through an OTA:
            <ul>
                <li> Access to comparison tools</li>
                <li>Peer reviews to help you with your decisions</li>
                <li>Flexible cancellation policies</li>
                <li>All your travel in one place</li>
                <li>Local flights and deals</li>
                <li> Rewards programs</li>
            </ul>           
            These benefits are why OTAs are so popular with travelers worldwide, and why you want to consider finding the one that works best for you. </p>
        </div>
    );
};

export default About;