import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ id, description, amount, createdAt }) => (
    <div>
        <h3>
           <Link to={`/edit/${id}`}>
                {description}
            </Link>
        </h3>
        <p>{amount} at {createdAt}</p>
        
            
    </div>
);

export default ExpenseItem;