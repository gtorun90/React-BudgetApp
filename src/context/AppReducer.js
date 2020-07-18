import {actionTypes} from './ActionTypes';

export default (state,action) => {
    switch(action.type){
        case actionTypes.ADD_INCOME_TRANSACTION:
            return {
                ...state,
                incomeTransactions:[...state.incomeTransactions,action.payload]
            }
        case actionTypes.ADD_EXPENSE_TRANSACTION:
            return {
                ...state,
                expenseTransactions:[...state.expenseTransactions,action.payload]
            }
        case actionTypes.REMOVE_INCOME_TRANSACTION:
            return {
              ...state,
                 incomeTransactions:state.incomeTransactions.filter(incomeTransaction => incomeTransaction.id !== action.payload)
            }
        case actionTypes.REMOVE_EXPENSE_TRANSACTION:
            return {
              ...state,
                 expenseTransactions:state.expenseTransactions.filter(expenseTransaction => expenseTransaction.id !== action.payload)
            }
        default:
           return state;
    }
}