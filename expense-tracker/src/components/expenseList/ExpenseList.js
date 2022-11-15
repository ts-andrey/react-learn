import './ExpenseList.css';
import ExpenseItem from '../expenseItem/ExpenseItem';

function ExpenseList(props) {
  return (
    <ul className='expense-list'>
      <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount} />
      <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount} />
      <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount} />
      <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title} amount={props.expenses[3].amount} />
    </ul>
  )
}

export default ExpenseList;