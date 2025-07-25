import React, { useState } from 'react';

const ColumnSelector = ({ columns, onColumnSelect }) => {
    const [selectedColumns, setSelectedColumns] = useState([]);

    const handleColumnChange = (column) => {
        setSelectedColumns((prevSelected) => {
            if (prevSelected.includes(column)) {
                return prevSelected.filter((c) => c !== column);
            } else {
                return [...prevSelected, column];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onColumnSelect(selectedColumns);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Select Columns for Visualization</h3>
            {columns.map((column) => (
                <div key={column}>
                    <label>
                        <input
                            type="checkbox"
                            value={column}
                            checked={selectedColumns.includes(column)}
                            onChange={() => handleColumnChange(column)}
                        />
                        {column}
                    </label>
                </div>
            ))}
            <button type="submit">Generate Chart</button>
        </form>
    );
};

export default ColumnSelector;