import React, { useState, useEffect } from 'react';
import OperationsForm from './OperationsForm';
import OperationsList from './OperationsList';

function App() {
    const [operations, setOperations] = useState([]);

    const fetchOperations = async () => {
        const response = await fetch('http://localhost:3001/api/operations');
        if (response.ok) {
            const data = await response.json();
            setOperations(data);
        } else {
            console.error('Failed to fetch operations');
        }
    };

    useEffect(() => {
        fetchOperations();
    }, []);

    return (
        <div className="App">
            <h1>Financial Manager</h1>
            <OperationsForm onAddOperation={fetchOperations} />
            <OperationsList operations={operations} />
        </div>
    );
}

export default App;

