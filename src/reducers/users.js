import { ADD_USER, SET_USERS, addUser, setUsers } from '../actions/users'

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return { 
                ...state,
                users: [...state.users, action.payload]
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export const loadUsers = () => async (dispatch) => {
    const users = await fetch('http://localhost:3001/users');
    dispatch(setUsers(await users.json()))
}

export const createUser = (userData) => async (dispatch) => {
    try {
        const user = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: userData })
        });
        dispatch(addUser(await user.json()));
    } catch (ex) {
        console.error(ex);
    }
}