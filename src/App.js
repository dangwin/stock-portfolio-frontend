import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { loadUsers } from './reducers/users';
import Users from './pages/Users';
import Stocks from "./pages/Stocks";
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
        <Route path="/users/:userId/stocks">
          <Stocks/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
