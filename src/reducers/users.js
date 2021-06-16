import { SET_USERS, setUsers } from '../actions/users'

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
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