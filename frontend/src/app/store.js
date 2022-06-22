import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/reducer';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  devTools: true
});
