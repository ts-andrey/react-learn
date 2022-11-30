import classes from './ErrorModal.module.css';

import { Fragment } from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';

const ErrorModal = props => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={classes.content}>
          <p>{props.message}</p>
        </main>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </Fragment>
  )
}

export default ErrorModal;