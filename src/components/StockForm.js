import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createStock } from '../reducers/stocks';

const StockForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(createStock(formData));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("symbol", { required: true })} />
            <input {...register("quantity", { required: true })} type="number" />
            <input type="submit" />
        </form>
    )
}

export default StockForm;