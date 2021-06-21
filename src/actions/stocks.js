export const SET_STOCKS = 'SET_STOCKS';
export const ADD_STOCK= 'ADD_STOCK';
export const UPDATE_QUANTITY='UDATE_QUANTITY';
export const REMOVE_STOCK = 'REMOVE_STOCK';

export const setStocks = (stocks) => ({
    type: SET_STOCKS,
    payload: stocks
});

export const addStock = (stock) => ({
    type: ADD_STOCK,
    payload: stock
})

export const updateQuantity = (stockId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: {stockId, quantity}
})

export const removeStock = (stockId) => ({
    type: REMOVE_STOCK,
    payload: stockId
})
