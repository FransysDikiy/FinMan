import React from 'react';

function OperationsList({ operations }) {
    return (
        <div>
            <h2>List of Operations</h2>
            {operations.length > 0 ? (
                <ul>
                    {operations.map((operation) => (
                        <li key={operation.id || operation.name}> {/* Assume operation.id is unique */}
                            {operation.name} - {operation.amount} {operation.currency}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No operations to display.</p>  // Message for when no operations are available
            )}
        </div>
    );
}

export default OperationsList;

