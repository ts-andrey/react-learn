import { useContext, useState } from 'react';
import classes from './HeaderCartButton.module.css';

import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';
import { useEffect } from 'react';

const HeaderCartButton = props => {
  const [isAnimate, setIsAnimate] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)


  const btnClasses = `${classes.button} ${isAnimate ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setIsAnimate(true);

    const timer = setTimeout(() => {
      setIsAnimate(false)
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;