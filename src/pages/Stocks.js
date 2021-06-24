import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { loadStocks } from '../reducers/stocks';
import Portfolio from "../components/Portfolio";
import StockForm from "../components/StockForm";
import PortfolioTotal from "../components/PortfolioTotal";



const Stocks = () => {
    const { userId } = useParams();
    const stocks = useSelector(state => state.stocks.stocks);
    const users = useSelector(state => state.users.users);
    const user = users.find(user => user.id == userId);
    const dispatch = useDispatch();

    useEffect(() => dispatch(loadStocks(userId)), [userId]);

    return (
        
        <Container fluid className="mt-3">  
            <h1>{user && user.name}'s Portfolio</h1>
            <br></br>
            <br></br>
            <Portfolio stocks={stocks} userId={userId}/>
            <StockForm userId={userId} />
            <br></br>
            <br></br>
            <PortfolioTotal />
            <br></br>
            <br></br>
            <Link to="/">Back to users</Link>
        </Container>
    )
}

export default Stocks;