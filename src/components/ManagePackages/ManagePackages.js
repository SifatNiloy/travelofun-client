import React from 'react';
import usePackages from '../../hooks/usePackages';

const ManagePackages = () => {
    const [packages, setPackages] = usePackages();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this package? ');
        if (proceed) {
            const url = `http://localhost:5000/package/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                const remaining= packages.filter(singlepackage=> singlepackage._id !== id);
                setPackages(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Mange Your Packages</h2>
            {
                packages.map(singlepackage => <div key={singlepackage._id}>
                    <h4>{singlepackage.name} <button onClick={() => handleDelete(singlepackage._id)}>Delete</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManagePackages;