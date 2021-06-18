import { SET_STOCKS, ADD_STOCK, setStocks, addStock } from '../actions/stocks'

const initialState = {
    stocks: []
}

export const stocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STOCK:{
            return {
                ...state,
                stocks: [...state.stocks, action.payload]
            }
        }
        case SET_STOCKS: {
            return {
                ...state,
                stocks: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export const loadStocks = (userId) => async (dispatch) => {
    const stocks = await fetch(`http://localhost:3001/users/${userId}/stocks`);   
    dispatch(setStocks(await stocks.json()))
}

export const createStock = (stockData) => async (dispatch) => {
    try {
        const stock = await fetch(`http://localhost:3001/users/${userId}/stocks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ stock: stockData })
        });
        dispatch(addStock(await stock.json()));
    } catch (ex) {
        console.error(ex);
    }
}