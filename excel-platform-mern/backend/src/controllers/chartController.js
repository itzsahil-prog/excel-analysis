const Chart = require('chart.js');
const { parseExcelData } = require('../utils/excelParser');
const UploadHistory = require('../models/UploadHistory');

exports.generateChart = async (req, res) => {
    try {
        const { fileId, selectedColumns } = req.body;

        // Fetch the uploaded file data using fileId
        const fileData = await UploadHistory.findById(fileId);
        if (!fileData) {
            return res.status(404).json({ message: 'File not found' });
        }

        // Parse the Excel data
        const parsedData = parseExcelData(fileData.filePath);
        const chartData = selectedColumns.map(column => parsedData[column]);

        // Create a chart configuration
        const chartConfig = {
            type: 'bar', // or 'line', 'pie', etc.
            data: {
                labels: Object.keys(chartData[0]), // Assuming the first column contains labels
                datasets: selectedColumns.map((column, index) => ({
                    label: column,
                    data: chartData[index],
                    backgroundColor: `rgba(${index * 50}, ${100 + index * 30}, ${150 + index * 20}, 0.5)`,
                    borderColor: `rgba(${index * 50}, ${100 + index * 30}, ${150 + index * 20}, 1)`,
                    borderWidth: 1
                }))
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        res.status(200).json({ chartConfig });
    } catch (error) {
        res.status(500).json({ message: 'Error generating chart', error: error.message });
    }
};