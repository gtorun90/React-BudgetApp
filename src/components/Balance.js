import React,{useContext} from 'react';
import {GlobalContext} from '../context/GobalState';
const Balance = () => {

    const {getTotalIncomeAmount,getTotalExpenseAmount,getBalance} = useContext(GlobalContext);

    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <h3>{getTotalIncomeAmount() < getTotalExpenseAmount() ? '-' : '+'} ${getBalance()}</h3>
            <div className="income-expense">
               <div className="plus">
                  <h3>Income</h3>
                  <p>+ ${getTotalIncomeAmount()}</p>
               </div>
               <div className="minus">
                  <h3>Expenses</h3>
                  <p>- ${getTotalExpenseAmount()}</p>
               </div>
            </div>
        </div>
    )
}

export default Balance;
