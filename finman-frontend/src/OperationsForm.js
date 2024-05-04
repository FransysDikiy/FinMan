import React, { useState } from 'react';

function OperationsForm({ onAddOperation }) {
    const [operation, setOperation] = useState({
        name: '',
        description: '',
        amount: '',
        currency: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/api/operations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(operation)
        });
        if (response.ok) {
            console.log('Operation added successfully');
            setOperation({ name: '', description: '', amount: '', currency: '' });
            onAddOperation();  // Refresh the list after adding
        } else {
            console.error('Failed to add operation');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={operation.name} onChange={e => setOperation({ ...operation, name: e.target.value })} placeholder="Name" />
            <input type="text" value={operation.description} onChange={e => setOperation({ ...operation, description: e.target.value })} placeholder="Description" />
            <input type="number" value={operation.amount} onChange={e => setOperation({ ...operation, amount: e.target.value })} placeholder="Amount" />
            <select value={operation.currency} onChange={e => setOperation({ ...operation, currency: e.target.value })}>
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
            <button type="submit">Add Operation</button>
        </form>
    );
}

export default OperationsForm;
