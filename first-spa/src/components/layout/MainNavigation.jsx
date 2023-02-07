import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quotes App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to={'/quotes'}
              className={(navdata) => navdata.isActive ? classes.active : ''}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/new-quote'}
              className={(navdata) => navdata.isActive ? classes.active : ''}>
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default MainNavigation;