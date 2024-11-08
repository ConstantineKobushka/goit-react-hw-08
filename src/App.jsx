import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import { apiGetContacts } from './redux/contactsOps';

import styles from './App.module.css';

function App() {
  const isLoading = useSelector((state) => state.contactsData.isLoading);
  const error = useSelector((state) => state.contactsData.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, []);

  return (
    <>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ContactList />
    </>
  );
}

export default App;
