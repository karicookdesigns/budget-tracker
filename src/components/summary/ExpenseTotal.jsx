import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const ExpenseTotal = () => {

  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className='balances balance-spent'>
        <h5>Spent</h5>
        <p>${totalExpenses}</p>
    </div>
  )
}

export default ExpenseTotal