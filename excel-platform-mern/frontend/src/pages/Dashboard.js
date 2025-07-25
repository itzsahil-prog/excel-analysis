import React from 'react';
import { useEffect, useState } from 'react';
import UploadHistory from '../components/UploadHistory';
import ChartGenerator from '../components/ChartGenerator';
import { getUserData } from '../utils/api';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1>User Dashboard</h1>
            {userData && (
                <div>
                    <h2>Welcome, {userData.username}</h2>
                    <UploadHistory />
                    <ChartGenerator />
                </div>
            )}
        </div>
    );
};

export default Dashboard;