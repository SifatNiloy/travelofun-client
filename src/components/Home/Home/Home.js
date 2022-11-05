import React from 'react';
import BudgetTravel from '../../BudgetTravel/BudgetTravel';
import Gallery from '../../Gallery/Gallery';
import Support from '../../Support/Support';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Support></Support>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;