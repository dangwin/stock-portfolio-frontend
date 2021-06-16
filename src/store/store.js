import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { stocksReducer } from '../reducers/stocks';
import { usersReducer } from '../reducers/users';
import thunk from  'redux-thunk';

const reducer = combineReducers({
    users: usersReducer, stocks: stocksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
