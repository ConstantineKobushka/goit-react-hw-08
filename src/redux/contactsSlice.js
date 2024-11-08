import { createSlice } from '@reduxjs/toolkit';

import {
  apiAddContacts,
  apiDeleteContacts,
  apiGetContacts,
} from './contactsOps';

// import listcontacts from '../listcontacts.json';

const INITIAL_STATE = {
  // contacts: listcontacts,
  contacts: null,
  isLoading: false,
  error: false,
};

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: INITIAL_STATE,
//   reducers: {
//     addContacts: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContacts: (state, action) => {
//       state.contacts = state.contacts.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
// });

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(apiGetContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiAddContacts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(apiAddContacts.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(apiAddContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiDeleteContacts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(apiDeleteContacts.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        state.isLoading = false;
      })
      .addCase(apiDeleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
// export const { addContacts, deleteContacts } = contactsSlice.actions;
