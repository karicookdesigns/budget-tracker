import React, { useContext } from 'react'
import { BiTrash } from 'react-icons/bi'
import { AppContext } from '../../context/AppContext'
import './expenses.css'

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }
  
  return (
    <li className='expense__list__item'>
      <div>{props.name}</div>
      <div>${props.cost}</div>
      <div><BiTrash onClick={handleDeleteExpense} className='delete__icon' /></div>
    </li>
  );
};

export default ExpenseItem