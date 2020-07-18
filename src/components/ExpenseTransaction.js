import React,{useContext} from 'react';
import {GlobalContext} from '../context/GobalState';
const ExpenseTransaction = ({expenseTransaction}) => {

  const {removeExpenseTransaction} = useContext(GlobalContext);
  
  return (
        <li className="transaction">
        <span className="transaction-text">{expenseTransaction.expenseText}</span>
        <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
        <button className="delete-btn" onClick={() => removeExpenseTransaction(expenseTransaction.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
}

export default ExpenseTransaction;
