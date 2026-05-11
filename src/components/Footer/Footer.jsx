import Container from '../Container/Container';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>Phonebook | Built with React | 2026</p>
      </Container>
    </footer>
  );
};

export default Footer;
