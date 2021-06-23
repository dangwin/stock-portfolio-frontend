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
            <h3>Purchase Stocks</h3>
            <input {...register("symbol", { required: true })} placeholder= "e.g. TSLA, AAPL"/>
            <input {...register("quantity", { required: true })} type="number" placeholder="Amount of Shares"/>
            <input type="submit" />
        </form>
    )
}

export default StockForm;