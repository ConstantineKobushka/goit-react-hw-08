import { useState } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import listcontacts from './listcontacts.json';

function App() {
  const [contacts, setContacts] = useState(listcontacts);
  const [searchValue, setSearchValue] = useState('');

  const foundContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      {/* <h1>Phonebook</h1> */}
      <ContactForm />
      <SearchBox searchValue={searchValue} onSearch={setSearchValue} />
      <ContactList contacts={foundContacts} />
    </>
  );
}

export default App;
