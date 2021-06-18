import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadStocks } from '../reducers/stocks';
import Portfolio from "../components/Portfolio";
import StockForm from "../components/StockForm";

const Stocks = () => {
    const { userId } = useParams();
    const stocks = useSelector(state => state.stocks.stocks);
    const dispatch = useDispatch();

    useEffect(() => dispatch(loadStocks(userId)), [userId]);

    return (
        <div>  
            <Portfolio stocks={stocks} />
            <StockForm userId = {userId}/>
            <Link to="/">Back to users</Link>
        </div>
    )
}

export default Stocks;