import React from 'react'
import { GlobalProvider } from "./context/GlobalState";
import Balance from './components/Balance';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className='bg-slate-900 text-yellow-50 h-screen flex justify-center items-center'>
        <div className='container mx-auto w-3/6'>
          <div className='bg-slate-800 p-10 rounded-lg flex gap-x-2'>
            <div>
              <h2 className='text-4xl font-bold'>Adm. de Gastos</h2>
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
            </div>
            <div className='flex flex-col flex-1'>
              <ExpenseChart />
            <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  ) 
}

export default App