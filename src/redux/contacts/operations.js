import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

const setToken = token => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiGetContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue(
        'No token provided to refresh user token'
      );
    }

    try {
      setToken(token);
      const { data } = await contactsInstance.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue(
        'No token provided to refresh user token'
      );
    }

    try {
      setToken(token);
      const { data } = await contactsInstance.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue(
        'No token provided to refresh user token'
      );
    }

    try {
      const { data } = await contactsInstance.delete(`/contacts/${id}`);
      setToken(token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
