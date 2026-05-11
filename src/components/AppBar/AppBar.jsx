import { useSelector } from 'react-redux';

import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';

import styles from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
