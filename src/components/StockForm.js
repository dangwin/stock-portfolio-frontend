import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createStock } from '../reducers/stocks';

const StockForm = ({ userId }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(createStock(userId, formData));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("symbol", { required: true })} placeholder= "e.g. TSLA, AAPL"/>
            <input {...register("quantity", { required: true })} type="number" placeholder="Amount of Shares to Purchase"/>
            <input type="submit" />
        </form>
    )
}

export default StockForm;