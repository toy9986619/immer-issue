import { configureStore } from '@reduxjs/toolkit';
import simpleReducer from '../features/simpleReducer';

export const store = configureStore({
  reducer: {
    simple: simpleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
});
