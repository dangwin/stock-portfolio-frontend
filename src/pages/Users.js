import React from 'react';
import { useSelector } from 'react-redux';
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Users = () => {
    const users = useSelector(state => state.users.users);

    return (
        <div>
            <UserList users={users}/>
            <UserForm/>
        </div>
    )
}

export default Users;