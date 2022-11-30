import classes from './UserList.module.css';

import Card from '../../UI/Card/Card';
import UserItem from '../UserItem/UserItem';

const UserList = props => {


  return (
    <Card className={classes['user-list']}>
      <ul>
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            name={user.name}
            age={user.age} />
        ))}
      </ul>
    </Card>
  )
}

export default UserList;