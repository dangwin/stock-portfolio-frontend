export const SET_USERS = 'SET_USERS';
export const ADD_USER = 'ADD_USER';

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
});

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})