import React from 'react'
import './summary.css'
import Budget from './Budget'
import Remaining from './Remaining'
import ExpenseTotal from './ExpenseTotal'

const Summary = () => {
  return (
        <div>
            <div className='container summary__container'>
                <div>
                    <Budget />
                </div>
                <div>
                    <ExpenseTotal />
                </div>
                <div>
                    <Remaining />
                </div>
            </div>
        </div>
  )
}

export default Summary