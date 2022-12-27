import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isShort = val => val.trim().length < 2;
const isLongEnough = val => val.trim().length >= 4 && val.trim().length <= 8;

const Checkout = props => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    city: true,
    street: true,
    postalCode: true,
  })

  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;

    const nameIsValid = !isShort(enteredName);
    const enteredCityIsValid = !isShort(enteredCity);
    const enteredStreetIsValid = !isShort(enteredStreet);
    const enteredPostalCodeIsValid = isLongEnough(enteredPostalCode);

    setFormInputsValidity({
      name: nameIsValid,
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
    })

    const formIsValid = nameIsValid && enteredCityIsValid && enteredStreetIsValid && enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostalCode,
    });
  }

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : `${classes.invalid}`}`;
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : `${classes.invalid}`}`;
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : `${classes.invalid}`}`;
  const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : `${classes.invalid}`}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" name="name" id="name" />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" name="city" id="city" />
        {!formInputsValidity.city && <p>Please enter a valid city! (at least 2 characters long)</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" name="street" id="street" />
        {!formInputsValidity.street && <p>Please enter a valid Street! (at least 2 characters long)</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal</label>
        <input ref={postalInputRef} type="text" name="postal" id="postal" />
        {!formInputsValidity.postalCode && <p>Please enter a valid Postal Code! (between 4 and 8 characters long)</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button className={classes.sumbit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout;