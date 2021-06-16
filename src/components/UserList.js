import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserList = () => {
    const users = useSelector(state => state.users.users);

    return (
        <table id = 'user-table'>
            <tr id = 'user-header'>
                <th>Name</th>
            </tr>
            
            {users.map(user => (
                <tr>
                    <td>
                        {user.name}
                    </td>
                    <td id = 'view-portfolio-button'>
                        <Link to={`/users/${user.id}/stocks`}>
                            <button id = 'view-users-portfolio'>
                                View Porfolio
                            </button>
                        </Link>
                    </td>
                </tr>
            ))}
        </table>
    )
}

export default UserList;