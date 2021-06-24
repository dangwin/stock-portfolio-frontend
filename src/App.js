import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { loadUsers } from './reducers/users';
import Users from './pages/Users';
import Stocks from "./pages/Stocks";
import StockQuantityForm from "./components/StockQuantityForm";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  })

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
        <Route path="/users/:userId/stocks" exact>
          <Stocks/>
        </Route>
        <Route path="/users/:userId/stocks/:stockId/edit">
          <StockQuantityForm/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
