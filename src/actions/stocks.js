export const SET_STOCKS = 'SET_STOCKS';
export const ADD_STOCK= 'ADD_STOCK';

export const setStocks = (stocks) => ({
    type: SET_STOCKS,
    payload: stocks
});

export const addStock = (stock) => ({
    type: ADD_STOCK,
    payload: stock
})