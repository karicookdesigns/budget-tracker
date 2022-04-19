import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../../context/AppContext'
import './expenses.css'
import AddExpense from './AddExpense'

const ExpenseList = () => {

    const { expenses } = useContext(AppContext);

  return (
      <div className='container expenselist__container'>
        <div className='expenselist__header'>
          <h2>Transactions</h2>
          <AddExpense />
        </div>
        <div className='expenselist'>
          <ul>
              {expenses.map((expense) => (
                  <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
              ))}
          </ul>
        </div>
      </div>
  );
};

export default ExpenseList;