import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage)
import authReducer from './auth/authSlice';

// Define the persist config for the auth reducer
const persistConfig = {
  key: 'auth', // Key for storing the state in localStorage
  storage, // Use localStorage for persisting
};

// Persist the authReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Create Redux store and add the persisted auth reducer
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
});

const persistor = persistStore(store); // Create the persistor to persist the store

// Export default store and persistor
export default store;
export { persistor };
