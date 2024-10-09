import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={nanoid()}
          userName={contact.name}
          userPhone={contact.number}
          userId={contact.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
