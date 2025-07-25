const XLSX = require('xlsx');

const parseExcelFile = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames;
    const data = {};

    sheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        data[sheetName] = XLSX.utils.sheet_to_json(worksheet);
    });

    return data;
};

const getColumnData = (data, columnName) => {
    return data.map(row => row[columnName]).filter(value => value !== undefined);
};

module.exports = {
    parseExcelFile,
    getColumnData
};