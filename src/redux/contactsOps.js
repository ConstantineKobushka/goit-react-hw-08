import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://672e1c09229a881691ef0375.mockapi.io/',
});

export const apiGetContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await contactsInstance.get('contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkApi) => {
    try {
      const response = await contactsInstance.post('contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactsId, thunkAPI) => {
    try {
      const response = await contactsInstance.delete(`/contacts/${contactsId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
