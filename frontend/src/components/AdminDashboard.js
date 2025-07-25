import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [uploadStats, setUploadStats] = useState([]);

    useEffect(() => {
        fetchUsers();
        fetchUploadStats();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/admin/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchUploadStats = async () => {
        try {
            const response = await axios.get('/api/admin/upload-stats');
            setUploadStats(response.data);
        } catch (error) {
            console.error('Error fetching upload statistics:', error);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>User Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Upload Statistics</h2>
            <ul>
                {uploadStats.map(stat => (
                    <li key={stat.id}>
                        {stat.username}: {stat.uploadCount} uploads
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;