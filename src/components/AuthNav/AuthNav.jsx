import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={styles.menu}>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
        to="/register"
      >
        Sign up
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
        to="/login"
      >
        Sign in
      </NavLink>
    </nav>
  );
};

export default AuthNav;
