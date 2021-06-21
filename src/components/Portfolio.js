import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteStock } from '../reducers/stocks';

const Portfolio = ({ stocks, userId }) => {
    const dispatch = useDispatch();

    const computeTotal = (stocks) => {
        return stocks.reduce((total, stock) => 
            total + (stock.current_price * stock.quantity), 0);
    }

    const removeStock = (stockId) => {
        dispatch(deleteStock(userId, stockId))
    }

    return (
        <table id = 'table'>
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Balance</th>
            </tr>
            {stocks.map(stock => (
                <tr key={stock.id}>
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
                        ${(+stock.current_price).toFixed(2)}
                    </td>
                    <td>
                        ${(stock.current_price * stock.quantity).toFixed(2)}
                    </td>
                    <td>
                        <Link to={`/users/${userId}/stocks/${stock.id}/edit`}>Edit</Link>
                    </td>
                    <td>
                        <a href="#" onClick={() => removeStock(stock.id)}>Delete</a>
                    </td>
                </tr>
            ))}
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <th>Total</th>
                <td>${computeTotal(stocks).toFixed(2)}</td>
            </tr>
        </table>
    )
}

export default Portfolio;