import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UploadHistory = () => {
    const [uploads, setUploads] = useState([]);

    useEffect(() => {
        const fetchUploadHistory = async () => {
            try {
                const response = await axios.get('/api/uploads/history');
                setUploads(response.data);
            } catch (error) {
                console.error('Error fetching upload history:', error);
            }
        };

        fetchUploadHistory();
    }, []);

    return (
        <div>
            <h2>Upload History</h2>
            <table>
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Uploaded By</th>
                        <th>Upload Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {uploads.map(upload => (
                        <tr key={upload._id}>
                            <td>{upload.fileName}</td>
                            <td>{upload.uploadedBy}</td>
                            <td>{new Date(upload.uploadDate).toLocaleString()}</td>
                            <td>
                                <button onClick={() => {/* Add download functionality */}}>Download</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UploadHistory;