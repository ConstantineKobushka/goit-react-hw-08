import { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import styles from './App.module.css';

function App() {
  // function initialContacts() {
  //   const contactsFromLocalStorage = localStorage.getItem('contactsData');
  //   return contactsFromLocalStorage ? JSON.parse(contactsFromLocalStorage) : listcontacts;
  // }

  const [searchValue, setSearchValue] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contactsData', JSON.stringify(contacts));
  // }, [contacts]);

  // const foundContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox searchValue={searchValue} onSearch={setSearchValue} />
      <ContactList />
    </>
  );
}

export default App;
