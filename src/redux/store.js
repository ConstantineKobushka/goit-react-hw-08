import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import createWebStorage from 'redux-persist/es/storage/createWebStorage';

import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';
import { authReducer } from './auth/slice';

const storage = createWebStorage('local');

const authConfig = {
  key: 'authKey',
  storage,
  whitelist: ['token'],
  version: 1,
};

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    filterValue: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
