import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Remaining = () => {

  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'balance-negative' : 'balance-positive';

  return (
    <div className={`balances ${alertType}`}>
        <h5>Remaining</h5>
        <p>${budget - totalExpenses}</p>
    </div>
  )
}

export default Remaining