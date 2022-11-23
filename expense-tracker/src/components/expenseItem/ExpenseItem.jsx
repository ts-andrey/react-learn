import { useState } from 'react';
import ExpenseDate from '../expenseDate/ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [isRemoving, setRemoving] = useState(false);

  const onCrossClickHandler = event => {
    event.stopPropagation();
    setRemoving(true);
  };

  const onConfirmHandler = event => {
    event.stopPropagation();
    const confirmType = event.target.innerText;

    if (confirmType === 'Confirm') {
      props.onDeleteHandler(props.data.id);
    } else {
      setRemoving(false);
    }
  };

  const disableRemovingHandler = event => setRemoving(false);

  const removeConfirmer = isRemoving && (
    <div className='expense-item__delete_confirm-wrapper'>
      <button className='expense-item__delete_button expense-item__delete_button--confirm' onClick={onConfirmHandler}>
        Confirm
      </button>
      <button className='expense-item__delete_button expense-item__delete_button--cancel' onClick={onConfirmHandler}>
        Cancel
      </button>
    </div>
  );

  const expense = (
    <div className='expense-item' onClick={disableRemovingHandler}>
      <ExpenseDate date={props.data.date} />
      <div className='expense-item__description'>
        <h2>{props.data.title}</h2>
        <div className='expense-item__price'>
          {props.data.amount}
          <span className='expense-item__price_currency'>$</span>
        </div>
      </div>
      <ul onClick={onCrossClickHandler} className='expense-item__delete_wrapper'>
        <li className='expense-item__delete_item'></li>
        <li className='expense-item__delete_item'></li>
      </ul>
      {removeConfirmer}
    </div>
  );

  // const expense;

  return <li>{expense}</li>;
}

export default ExpenseItem;
