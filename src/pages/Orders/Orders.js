import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';
import Header from '../Shared/Header/Header';
import './Orders.css';


const Orders = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useFirebase();

    const onSubmit = data => {
        axios.post('http://localhost:5000/orders', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name")} value={user.displayName} placeholder='Name' />
                <input {...register("email")} value={user.email} placeholder='Email' />
                <input {...register("info")} placeholder='Information about Product' />
                <input {...register("address")} placeholder='Address' />
                <input {...register("phone")} placeholder='Phone' />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Orders;