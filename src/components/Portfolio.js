import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadStocks } from '../reducers/stocks';

const Portfolio = () => {
    const { userId } = useParams();
    const stocks = useSelector(state => state.stocks.stocks);
    const dispatch = useDispatch();

    useEffect(() => dispatch(loadStocks(userId)), [userId]);

    return (
        <div>  
            <table>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {stocks.map(stock => (
                    <tr>
                        <td>
                            {stock.name}
                        </td>
                        <td>
                            {stock.symbol}
                        </td>
                        <td>
                            {stock.quantity}
                        </td>
                        <td>
                            ${stock.current_price}
                        </td>
                    </tr>
                ))}
            </table>
            <Link to="/">Back to users</Link>
        </div>
    )
}

export default Portfolio;