import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          {isLoggedIn && (
            <li>
              <NavLink to='/quotes' activeClassName={classes.active}>
                All Quotes
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to='/new-quote' activeClassName={classes.active}>
                Add a Quote
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to='/' activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to='/new-quote' activeClassName={classes.active}>
                Profile
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to='/new-quote' activeClassName={classes.active}>
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
