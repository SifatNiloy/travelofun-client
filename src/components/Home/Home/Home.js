import React from 'react';
import BudgetTravel from '../../BudgetTravel/BudgetTravel';
import Gallery from '../../Gallery/Gallery';
import Support from '../../Support/Support';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Packages></Packages>
            <Support></Support>
            <BudgetTravel></BudgetTravel>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;