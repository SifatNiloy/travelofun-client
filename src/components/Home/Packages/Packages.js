import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';
const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        const getPackages=async()=>{
            const url=`https://secure-shelf-54719.herokuapp.com/package`;
            const {data}= await axios.get(url);
            setPackages(data);
        }
        getPackages();
        // fetch('https://secure-shelf-54719.herokuapp.com/package')
        //     .then(res => res.json())
        //     .then(data => setPackages(data))
    })
    return (
        <div>
            <h2 className='my-5 text-center'>Our packages</h2>
            <div className='container'>
                <div className=' row'>
                    {
                        packages.map(singlePackage => <Package key={singlePackage._id} singlePackage={singlePackage}></Package>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;