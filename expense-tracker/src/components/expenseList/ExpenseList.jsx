import './ExpenseList.css';
import ExpenseItem from '../expenseItem/ExpenseItem';

function ExpenseList(props) {
  return (
    <ul className='expense-list'>
      {props.expenses.map((expense) => {
        return <ExpenseItem data={expense} />
      })}
    </ul>
  )
}

export default ExpenseList;