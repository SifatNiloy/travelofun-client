import React from 'react';
import { useForm } from "react-hook-form";
const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://secure-shelf-54719.herokuapp.com/package`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        reset();
        alert('added successfully');

    };
    return (
        <div className='my-5 py-5 w-50 mx-auto'>
            <h2>Add new pack</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' className='mb-2' {...register("description")} />
                <input placeholder='price' className='mb-2' type="text" {...register("price")} />
                <input placeholder='duration' className='mb-2' type="text" {...register("duration")} />
                <input placeholder='photo url' className='mb-2' type="text" {...register("image")} />


                <input type="submit" value="Add pack" />
            </form>
        </div>
    );
};

export default AddPackage;