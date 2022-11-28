import { useState } from 'react';
import './ExpenseForm.css';

const BTN_DEFAULT_TEXT = 'Add New Expense';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const [mode, setMode] = useState('default');

  const titleChangeHandler = event => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setAmount(+event.target.value);
  };

  const dateChangeHandler = event => {
    setDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const dataObject = { title, amount, date: new Date(date) };

    props.onSaveExpense(dataObject);

    setTitle('');
    setAmount('');
    setDate('');
  };

  const modeHandler = event => {
    if (event.target.innerText === BTN_DEFAULT_TEXT) {
      setMode('form');
    } else if (event.target.innerText === 'Cancel') {
      setMode('default');
    }
  };

  let content;
  if (mode === 'default') {
    content = (
      <div>
        <button className='new-expense__button-default' onClick={modeHandler}>
          {BTN_DEFAULT_TEXT}
        </button>
      </div>
    );
  } else if (mode === 'form') {
    content = (
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={title} onChange={titleChangeHandler} required />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangeHandler} required />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' value={date} min='2022-01-01' max='2023-01-01' onChange={dateChangeHandler} required />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button onClick={modeHandler}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    );
  }

  return content;
}

export default ExpenseForm;
