import { SET_STOCKS, ADD_STOCK, setStocks, addStock, REMOVE_STOCK, removeStock, UPDATE_QUANTITY, updateQuantity } from '../actions/stocks'

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
        case UPDATE_QUANTITY: {
            return {
                ...state,
                stocks: state.stocks.map(stock => 
                    stock.id == action.payload.stockId ? 
                    { ...stock, quantity: action.payload.quantity } 
                    : stock )
            }
        }
        case REMOVE_STOCK: {
            return {
                ...state,
                stocks: state.stocks.filter(stock => stock.id != action.payload)
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

export const createStock = (userId, stockData) => async (dispatch) => {
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

export const editQuantity = (userId, stockId, quantity) => async (dispatch) => {
    const stock = await fetch(`http://localhost:3001/users/${userId}/stocks/${stockId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity })
    });
    dispatch(updateQuantity(stockId, quantity))
}

export const deleteStock = (userId, stockId) => async (dispatch) => {
    await fetch(`http://localhost:3001/users/${userId}/stocks/${stockId}`, { method: 'DELETE' })
    dispatch(removeStock(stockId))
}