import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users = [] }) => {
    return (
        <table id = 'table'>
            <tr id = 'user-header'>
                <th>Name</th>
            </tr>
            
            {users.map(user => (
                <tr key={user.id}>
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