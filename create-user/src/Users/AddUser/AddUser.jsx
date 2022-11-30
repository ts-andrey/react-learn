import classes from './AddUser.module.css';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = props => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = event => {
    setUserName(event.target.value);
  }

  const userageChangeHandler = event => {
    setUserAge(event.target.value);
  }

  const addUserHandler = event => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)!'
      })
      return;
    }
    if (+userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)!'
      })
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName('');
    setUserAge('');
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" id="username" value={userName} onChange={usernameChangeHandler} />
          <label htmlFor="userage">User Age</label>
          <input type="number" name="userage" id="userage" value={userAge} onChange={userageChangeHandler} />
          <Button type="submit">Create User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser;