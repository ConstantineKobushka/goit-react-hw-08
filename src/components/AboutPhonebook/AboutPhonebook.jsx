import styles from './AboutPhonebook.module.css';

const AboutPhonebook = () => {
  return (
    <>
      <h2 className={styles.subtitle}>Organize Your Contacts Effortlessly</h2>

      <p className={styles.text}>
        Keep all your important contacts in one convenient place. Phonebook
        helps you manage personal and business connections quickly, easily, and
        without unnecessary complexity.
      </p>

      <p className={styles.text}>
        Add new contacts, update information, search by name, and keep
        everything organized with a modern and intuitive interface.
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>Simple and user-friendly interface</li>

        <li className={styles.item}>Fast contact search and filtering</li>

        <li className={styles.item}>Easy editing and contact management</li>

        <li className={styles.item}>Responsive design for all devices</li>

        <li className={styles.item}>Secure and convenient data organization</li>
      </ul>
    </>
  );
};

export default AboutPhonebook;
