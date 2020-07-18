import React,{useContext,useState} from "react";
import {GlobalContext} from '../context/GobalState';
import {v4 as uuid}  from 'uuid'

const AddTransaction = () => {
  const [income, setIncome] = useState({
    incomeText:'',
    incomeAmount:0
  });
  const [expense, setExpense] = useState({
    expenseText:'',
    expenseAmount:0
  });
  
  const {addIncomeTransaction} = useContext(GlobalContext);
  const {addExpenseTransaction} = useContext(GlobalContext);
  
  const onIncomeChangeHandler = e => {
    setIncome({...income,[e.target.name]:e.target.value});
  } 
  const onExpenseChangeHandler = e => {
    setExpense({...expense,[e.target.name]:e.target.value});
  } 
  const newIncomeTransaction = ({
    id:uuid(),
    incomeText:income.incomeText,
    incomeAmount:income.incomeAmount*1
  });
  const newExpenseTransaction = ({
    id:uuid(),
    expenseText:expense.expenseText,
    expenseAmount:expense.expenseAmount*1
  });
  const onIncomeSubmitHandler = e =>{
    e.preventDefault();
    addIncomeTransaction(newIncomeTransaction);
  }
  const onExpenseSubmitHandler = e =>{
    e.preventDefault();
    addExpenseTransaction(newExpenseTransaction);
  }
  return (
    <div className="form-wrapper">
      <form onSubmit={onIncomeSubmitHandler}>
        <div className="input-group income">
          <input type="text" placeholder="Add Income"  onChange={onIncomeChangeHandler} name="incomeText" autoComplete="off" />
          <input type="number" placeholder="Amount..." onChange={onIncomeChangeHandler} name="incomeAmount" autoComplete="off" />
          <input type="submit" value="Add"/>
        </div>
      </form>
      <form onSubmit={onExpenseSubmitHandler}>
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense" onChange={onExpenseChangeHandler} name="expenseText" autoComplete="off" />
          <input type="number" placeholder="Amount..." onChange={onExpenseChangeHandler} name="expenseAmount" autoComplete="off" />
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
