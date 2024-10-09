import styles from './Contact.module.css';

const Contact = ({ userName, userPhone, userId, onDelete }) => {
  return (
    <li>
      <div>
        <p>{userName}</p>
        <p>{userPhone}</p>
      </div>
      <button type='button' onClick={() => onDelete(userId)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
