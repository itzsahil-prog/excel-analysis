import React from 'react';
import { saveAs } from 'file-saver';

const ChartDownload = ({ chartData }) => {
    const downloadChart = (format) => {
        const chartCanvas = document.getElementById('chartCanvas');
        if (!chartCanvas) return;

        chartCanvas.toBlob((blob) => {
            saveAs(blob, `chart.${format}`);
        }, `image/${format}`);
    };

    return (
        <div>
            <h2>Download Chart</h2>
            <button onClick={() => downloadChart('png')}>Download as PNG</button>
            <button onClick={() => downloadChart('pdf')}>Download as PDF</button>
        </div>
    );
};

export default ChartDownload;