import React from 'react';
import usePackages from '../../hooks/usePackages';

const ManagePackages = () => {
    const [packages]= usePackages();

    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Mange Your Packages</h2>
            {
                packages.map(singlepackage=> <div key={singlepackage._id}>
                    <h4>{singlepackage.name} <button>Delete</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManagePackages;