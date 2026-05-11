import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';

import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={styles.menu}>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
        to="/"
      >
        Phonebook
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.active)
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
