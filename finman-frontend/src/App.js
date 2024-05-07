import React, {useState, useEffect} from 'react';
import OperationsForm from './OperationsForm';
import OperationsList from './OperationsList';

function App() {
    const [operations, setOperations] = useState([]);

    // Function to fetch operations from the backend
    const fetchOperations = async () => {
        const data = {name: "Groceries", description: "food & drinks", amount: 120, currency: "USD"};
        const response = await fetch('http://localhost:3000/api/operations',
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
        if (response.ok) {
            const data = await response.json();
            setOperations(data);
        } else {
            console.error('Failed to fetch operations');
        }
    };

    useEffect(() => {
        fetchOperations();  // Use the function to fetch operations on component mount
    }, []);

    return (
        <div className="App">
            <h1>Financial Manager</h1>
            <OperationsForm onAddOperation={fetchOperations}/> // Passed to re-fetch operations after adding
            <OperationsList operations={operations}/>
        </div>
    );
}

export default App;


