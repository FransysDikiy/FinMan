const express = require('express');
const router = express.Router();
const FinancialOperations = require('../data/FinancialOperations');

// Get all financial operations
router.get('/', (req, res) => {
    res.json(FinancialOperations.getAll());  // Use DAO to get all operations
});

// Add a new financial operation(At least in theory)
router.post('/', (req, res) => {
    const { name, description, amount, currency } = req.body;
    if (!name || !amount || !currency) {
        return res.status(400).json({ error: 'Name, amount, and currency are required' });
    }
    console.log(name, description, amount, currency);
    const newOperation = { name, description, amount, currency };
    const addedOperation = FinancialOperations.add(newOperation);  // Use DAO to add operation
    res.status(201).json(addedOperation);
});

module.exports = router;
