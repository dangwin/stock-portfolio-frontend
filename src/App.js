import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { loadUsers } from './reducers/users';
import UserList from './components/UserList';
import Portfolio from "./components/Portfolio";
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
          <UserList/>
        </Route>
        <Route path="/users/:userId/stocks">
          <Portfolio/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
