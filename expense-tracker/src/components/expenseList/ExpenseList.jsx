import './ExpenseList.css';
import ExpenseItem from '../expenseItem/ExpenseItem';
import ExpenseFilter from '../expenseFilter/ExpenseFilter';
import { useState } from 'react';

function ExpenseList(props) {
  const [filterYear, setFilterYear] = useState('2022');

  const filterChangeHandler = newFilterYear => {
    setFilterYear(newFilterYear);
    console.log(filterYear);
  };

  const filterExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterYear);

  let expensesContent = <h2>No expenses was found!</h2>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map(expense => {
      return <ExpenseItem key={expense.id} data={expense} onDeleteHandler={props.onDeleteHandler} />;
    });
  }

  return (
    <div className='expense-list__wrapper'>
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      <ul className='expense-list'>{expensesContent}</ul>
    </div>
  );
}

export default ExpenseList;
