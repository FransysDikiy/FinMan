import React from 'react';

function OperationsList({ operations }) {
    return (
        <div>
            <h2>Operations List</h2>
            <ul>
                {operations.map((op, index) => (
                    <li key={index}>
                        {op.name} - {op.amount} {op.currency}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OperationsList;
