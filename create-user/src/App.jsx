import { Fragment, useState } from 'react';
import AddUser from './Users/AddUser/AddUser';
import UserList from './Users/UserList/UserList';

const TEST_USERS = [
  { name: 'John', age: 20, id: 2 },
  { name: 'Daniel', age: 32, id: 3 }
]

function App() {
  const [userList, setUserList] = useState(TEST_USERS);

  const addUserHandler = (userName, userAge) => {
    const id = Math.random().toString();
    setUserList(prevState => [{ name: userName, age: userAge, id }, ...prevState]);
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
