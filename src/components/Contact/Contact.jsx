import styles from './Contact.module.css';

const Contact = ({ userName, phoneNumber }) => {
  return (
    <li>
      <div>
        <p>{userName}</p>
        <p>{phoneNumber}</p>
      </div>
      <button type='button'>Delete</button>
    </li>
  );
};

export default Contact;
