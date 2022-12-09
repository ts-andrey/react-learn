import { useState } from 'react';
import { Fragment } from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }

  const hideCartHandler = () => {
    setCartIsVisible(false);
  }

  return (
    <Fragment>
      {cartIsVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
