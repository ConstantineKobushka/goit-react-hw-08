import { createSlice } from '@reduxjs/toolkit';

import { apiGetContacts, apiAddContact, apiDeleteContact } from './operations';

const INITIAL_STATE = {
  contacts: null,
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(apiGetContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(apiGetContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(apiAddContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(apiAddContact.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      .addCase(apiDeleteContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
