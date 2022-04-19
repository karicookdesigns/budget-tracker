import React from 'react'
import './index.css'
import { AppProvider } from './context/AppContext'
import Header from './components/header/Header'
import Summary from './components/summary/Summary'
import ExpenseList from './components/expenses/ExpenseList'

const App = () => {
  return (
    <AppProvider>
        <Header />
      <div className='container grid__container'>
        <Summary />
        <ExpenseList />
      </div>
    </AppProvider>
  )
}

export default App