import { SET_STOCKS, setStocks } from '../actions/stocks'

const initialState = {
    stocks: []
}

export const stocksReducer = (state = initialState, action) => {
    switch (action.type) {
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