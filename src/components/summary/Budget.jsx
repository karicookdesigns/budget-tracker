import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Budget = () => {

  const { budget } = useContext(AppContext);
  return (
    <div className='balances balance-total'>
        <h5>Budget</h5>
        <p>${budget}</p>
    </div>
  )
}

export default Budget