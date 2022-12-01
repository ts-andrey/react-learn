import classes from './AddUser.module.css';

import { Fragment, useState, useRef } from 'react';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = props => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)!'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)!'
      })
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" id="username" ref={nameInputRef} />
          <label htmlFor="userage">User Age</label>
          <input type="number" name="userage" id="userage" ref={ageInputRef} />
          <Button type="submit">Create User</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddUser;