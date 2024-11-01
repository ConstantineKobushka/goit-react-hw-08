import { useDispatch } from 'react-redux';

import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';

import styles from './Contact.module.css';

const Contact = ({ userName, userPhone, userId }) => {
  const dispath = useDispatch();

  const deletContact = (contactId) => {
    const action = { type: 'contacts/deleteContacts', payload: contactId };
    dispath(action);
  };

  return (
    <li className={styles.item}>
      <div className={styles.textwrapper}>
        <div className={styles.textInner}>
          <FaUser />
          <p className={styles.textName}>{userName}</p>
        </div>
        <div className={styles.textInner}>
          <FaPhone />
          <p className={styles.textNumber}>{userPhone}</p>
        </div>
      </div>
      <button className={styles.btn} type='button' onClick={() => deletContact(userId)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
