
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [currentCurrency, setCurrentCurrency] = useState(currency);

    const updateCurrency = (currency) => {
        setCurrentCurrency(currency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }

    return (
            <select className="custom-select" name="selectCurrency" id="selectCurrency" value={currentCurrency} onChange={(e) => updateCurrency(e.target.value)}>
                <option value="$">Currency ($ - Dollar)</option>
                <option value="£">Currency (£ - Pound)</option>
                <option value="€">Currency (€ - Euro)</option>
                <option value="₹">Currency (₹ - Ruppee)</option>
            </select>
    );
};
export default Budget;