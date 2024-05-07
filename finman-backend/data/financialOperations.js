class FinancialOperations {
    constructor() {
        this.operations = [];
    }

    getAll() {
        return this.operations;
    }

    add(operation) {
        operation.id = this.operations.length + 1;  // Simple ID based on length, not ideal for production
        this.operations.push(operation);
        return this.operations;
    }
}

module.exports = new FinancialOperations();  // Export as a singleton

