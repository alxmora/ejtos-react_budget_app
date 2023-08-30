
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);

    const validateNewBudget = (value) => {
        if (value < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
        } else {
            setNewBudget(value);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input
                        required='required'
                        type='number'
                        id='budget'
                        value={newBudget}
                        step='10'
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => validateNewBudget(event.target.value)}>
                        </input></span>
        </div>
    );
};
export default Budget;