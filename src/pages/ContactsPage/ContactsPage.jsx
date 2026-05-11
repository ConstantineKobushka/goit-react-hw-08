import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { selectFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import {
  apiAddContact,
  apiDeleteContact,
  apiGetContacts,
} from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const searchValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const addContact = contact => {
    dispatch(apiAddContact(contact));
  };

  const deleteContact = id => {
    dispatch(apiDeleteContact(id));
  };

  const setSearchValue = value => {
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <Main>
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactForm onAdd={addContact} />
          <SearchBox searchValue={searchValue} onSearch={setSearchValue} />
          <ContactList contacts={filteredContacts} onDelete={deleteContact} />
          {loading && <Loader />}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
      </Section>
    </Main>
  );
};

export default ContactsPage;
