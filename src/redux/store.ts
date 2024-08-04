import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userReducer from './slices/userSlice';
const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
