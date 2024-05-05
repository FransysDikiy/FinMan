import React, { useState, useEffect } from 'react';
import OperationsForm from './OperationsForm';
import OperationsList from './OperationsList';

function OperationsComponent() {
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/operations')
            .then(response => response.json())
            .then(data => setOperations(data))
            .catch(error => console.error('Failed to fetch operations', error));
    }, []);

    const addOperation = operation => {
        const optimisticNewOperation = { ...operation, id: new Date().getTime() }; // Temporary ID
        setOperations(prevOperations => [...prevOperations, optimisticNewOperation]); // Optimistically add operation

        fetch('http://localhost:3000/api/operations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(operation)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add operation');
                }
                return response.json();
            })
            .then(newOperation => {
                setOperations(prevOperations =>
                    prevOperations.map(op => op.id === optimisticNewOperation.id ? newOperation : op) // Replace temporary operation with confirmed from server
                );
            })
            .catch(error => {
                console.error('Failed to add operation', error);
                setOperations(prevOperations =>
                    prevOperations.filter(op => op.id !== optimisticNewOperation.id) // Remove optimistic operation on failure
                );
            });
    };

    return (
        <div>
            <h1>Financial Operations</h1>
            <OperationsForm onAddOperation={addOperation} />
            <OperationsList operations={operations} />
        </div>
    );
}

export default OperationsComponent;
