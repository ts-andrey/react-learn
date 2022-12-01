import classes from './ErrorModal.module.css';

import { Fragment } from 'react';
import {createPortal} from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';

const Backdrop = props => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
    </div>
  )
}

const ModalOverlay = props => {
  return (
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
  )
}

const ErrorModal = props => {
  return (
    <Fragment>
      {createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('root-backdrop'))}
      {createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('root-overlay'))}
    </Fragment>
  )
}

export default ErrorModal;