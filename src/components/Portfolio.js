import React, { useEffect } from 'react';

const Portfolio = ({ stocks }) => {
    const computeTotal = (stocks) => {
        return stocks.reduce((total, stock) => 
            total + (stock.current_price * stock.quantity), 0);
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