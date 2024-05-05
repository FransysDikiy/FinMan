import React, { useState } from 'react';

function OperationsForm({ onAddOperation }) {
    const [operation, setOperation] = useState({
        name: '',
        description: '',
        amount: '',
        currency: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOperation(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddOperation(operation);
        setOperation({ name: '', description: '', amount: '', currency: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={operation.name} onChange={handleInputChange} placeholder="Name" required />
            <input type="text" name="description" value={operation.description} onChange={handleInputChange} placeholder="Description" />
            <input type="number" name="amount" value={operation.amount} onChange={handleInputChange} placeholder="Amount" required />
            <select name="currency" value={operation.currency} onChange={handleInputChange} required>
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CZK">CZK</option>
            </select>
            <button type="submit">Add Operation</button>
        </form>
    );
}

export default OperationsForm;