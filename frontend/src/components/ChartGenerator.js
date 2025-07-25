import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartGenerator = ({ data, selectedColumns }) => {
    const [chartData, setChartData] = useState({});

    const generateChartData = () => {
        const labels = data.map(item => item[selectedColumns[0]]);
        const datasets = selectedColumns.map((column, index) => ({
            label: column,
            data: data.map(item => item[column]),
            borderColor: `rgba(${index * 50}, ${100 + index * 50}, ${150 + index * 50}, 1)`,
            backgroundColor: `rgba(${index * 50}, ${100 + index * 50}, ${150 + index * 50}, 0.2)`,
        }));

        setChartData({
            labels,
            datasets,
        });
    };

    React.useEffect(() => {
        if (data && selectedColumns.length > 0) {
            generateChartData();
        }
    }, [data, selectedColumns]);

    return (
        <div>
            <h2>Chart Generator</h2>
            {chartData.labels && chartData.datasets ? (
                <Line data={chartData} />
            ) : (
                <p>No data available to display the chart.</p>
            )}
        </div>
    );
};

export default ChartGenerator;