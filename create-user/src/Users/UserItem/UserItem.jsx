import classes from './UserItem.module.css';

const UserItem = props => {
  return <li className={classes['user-list__item']}>{props.name} ({props.age} years old)</li>
}

export default UserItem;