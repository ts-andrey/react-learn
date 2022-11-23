import './NewExpense.css';

import ExpenseForm from '../expenseForm/ExpenseForm';

function NewExpense(props) {
  const saveExpenseHandler = data => {
    const identificator = Math.random().toString();
    const expenseData = {
      ...data,
      id:identificator,
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
