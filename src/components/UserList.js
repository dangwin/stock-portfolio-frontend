import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({ users = [] }) => {
    return (
        <Table striped bordered hover size ="sm">
            <tr id = 'user-header'>
                <th>User</th>
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
        </Table>
    )
}

export default UserList;