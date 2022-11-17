import './NewExpense.css';

import ExpenseForm from '../expenseForm/ExpenseForm';

function NewExpense(props) {
  const saveExpenseHandler = data => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
