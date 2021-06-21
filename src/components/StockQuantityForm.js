import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { editQuantity } from '../reducers/stocks';

const StockForm = () => {
    const { userId, stockId  } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const stock = useSelector(state => state.stocks.stocks.find(stock => stock.id == stockId));
    const { register, handleSubmit } = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(editQuantity(userId, stock.id, formData.quantity));
        history.push(`/users/${userId}/stocks`)
    };

    if (!stock) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>{stock.symbol}</label>
            <input {...register("quantity", { required: true, value: stock.quantity })} type="number"/>
            <input type="submit" />
        </form>
    )
}

export default StockForm;