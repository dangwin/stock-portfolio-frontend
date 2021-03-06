import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStock } from '../reducers/stocks';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Portfolio extends Component {

    render() {
        const { stocks, userId, deleteStock } = this.props

        return (
            <Table striped bordered hover variant="dark">
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
                            <Link to={`/users/${userId}/stocks/${stock.id}/edit`}>Update Quantity</Link>
                        </td>
                        <td>
                            <a href="#" onClick={() => deleteStock(userId, stock.id)}>Sell all shares</a>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </Table>
        )
    }
}

export default connect(null, { deleteStock })(Portfolio);