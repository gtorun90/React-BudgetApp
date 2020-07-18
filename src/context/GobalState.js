import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {actionTypes} from './ActionTypes';
const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Car sold", incomeAmount: 15000 },
    { id: 2, incomeText: "Salary", incomeAmount: 5000 },
    { id: 3, incomeText: "Bonus", incomeAmount: 13000 },
  ],
  expenseTransactions: [
    { id: 4, expenseText: "Rent", expenseAmount: 1000 },
    { id: 5, expenseText: "Bank", expenseAmount: 2000 },
    { id: 6, expenseText: "Clothes", expenseAmount: 500 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncomeTransaction = (incomeTransaction) => {
    dispatch({
      type: actionTypes.ADD_INCOME_TRANSACTION,
      payload: incomeTransaction
    });
  };
  const addExpenseTransaction = (expenseTransaction) => {
    dispatch({
      type: actionTypes.ADD_EXPENSE_TRANSACTION,
      payload: expenseTransaction
    });
  };
  const removeIncomeTransaction = id => {
    console.log('id: ' + id);
    dispatch({
      type:actionTypes.REMOVE_INCOME_TRANSACTION,
      payload:id
    });
  }
  const removeExpenseTransaction = id => {
    dispatch({
      type:actionTypes.REMOVE_EXPENSE_TRANSACTION,
      payload:id
    });
  }
  const getTotalIncomeAmount = () => {
    return state.incomeTransactions.reduce((acc,item) => acc += item.incomeAmount,0);
  }
  const getTotalExpenseAmount = () => {
    return state.expenseTransactions.reduce((acc,item) => acc += item.expenseAmount,0);
  }
  const getBalance = () => {
    return Math.abs(getTotalIncomeAmount() - getTotalExpenseAmount());
  }
  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncomeTransaction,
        addExpenseTransaction,
        removeIncomeTransaction,
        removeExpenseTransaction,
        getTotalIncomeAmount,
        getTotalExpenseAmount,
        getBalance
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
