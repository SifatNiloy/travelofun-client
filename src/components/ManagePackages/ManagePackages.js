import React from 'react';
import usePackages from '../../hooks/usePackages';

const ManagePackages = () => {
    const [packages, setPackages] = usePackages();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this package? ');
        if (proceed) {
            const url = `https://travelofun-server.onrender.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                const remaining= packages.filter(singlePackage=> singlePackage._id !== id);
                setPackages(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Mange Your packages</h2>
            {
                packages.map(singlePackage => <div key={singlePackage._id}>
                    <h4>{singlePackage.name} <button onClick={() => handleDelete(singlePackage._id)}>Delete</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManagePackages;