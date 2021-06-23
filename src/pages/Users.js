import React from 'react';
import { useSelector } from 'react-redux';
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Users = () => {
    const users = useSelector(state => state.users.users);

    return (
        <div  className="bg">
            <h1 id = 'Main-header'>Fantasy Stocks Portflio Stimulator</h1>

            <br></br>
            <br></br>
            <br></br>
            <UserList users={users}/>
            <UserForm/>
        </div>
    )

}

export default Users;