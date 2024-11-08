import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://672e1c09229a881691ef0375.mockapi.io/contacts',
});

export const apiGetContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await contactsInstance.get('');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
