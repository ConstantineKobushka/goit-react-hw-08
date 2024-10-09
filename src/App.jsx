import { useState } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import listcontacts from './listcontacts.json';

function App() {
  const [contacts, setContacts] = useState(listcontacts);
  const [searchValue, setSearchValue] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const foundContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()));

  const deletContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox searchValue={searchValue} onSearch={setSearchValue} />
      <ContactList contacts={foundContacts} onDelete={deletContact} />
    </>
  );
}

export default App;
