import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} userName={contact.name} phoneNumber={contact.number} />
      ))}
    </ul>
  );
};

export default ContactList;
