import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import usersSlice from '@reducers/usersSlice';

const store = configureStore({
  reducer: {
    users: usersSlice,
  }
});

const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);