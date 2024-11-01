import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';

import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contactsData.contacts);

  return (
    <ul className={styles.list}>
      {contacts.length > 0 &&
        contacts.map((contact) => (
          <Contact key={nanoid()} userName={contact.name} userPhone={contact.number} userId={contact.id} />
        ))}
    </ul>
  );
};

export default ContactList;
