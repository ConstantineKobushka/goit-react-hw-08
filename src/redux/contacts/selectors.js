import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contactsData.contacts;
export const selectLoading = state => state.contactsData.loading;
export const selectError = state => state.contactsData.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const data = Array.isArray(contacts)
      ? contacts.filter(
          contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
    return data;
  }
);
