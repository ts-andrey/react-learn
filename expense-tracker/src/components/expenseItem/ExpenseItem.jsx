import ExpenseDate from '../expenseDate/ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <li className='expense-item'>
      <ExpenseDate date={props.data.date} />
      <div className='expense-item__description'>
        <h2>{props.data.title}</h2>
        <div className='expense-item__price'>{props.data.amount}<span className='expense-item__price_currency'>$</span></div>
      </div>
    </li>
  );
}

export default ExpenseItem;
