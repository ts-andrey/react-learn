import { useState } from 'react';
import ExpenseList from './components/expenseList/ExpenseList';
import NewExpense from './components/newExpense/NewExpense';

const INIT_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 11, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 10, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const addExpenseHandler = newExpense => {
    setExpenses(prevState => [newExpense, ...prevState]);
    console.log(newExpense);
  };

  const deleteExpenseHandler = expenseID => {
    setExpenses(prevState => prevState.filter(el => el.id !== expenseID));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} onDeleteHandler={deleteExpenseHandler} />
    </div>
  );
}

export default App;
