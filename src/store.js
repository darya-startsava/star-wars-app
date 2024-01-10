import { configureStore } from '@reduxjs/toolkit';
import { starWarsAPI } from './service';

export const store = configureStore({
  reducer: {
    [starWarsAPI.reducerPath]: starWarsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsAPI.middleware),
});
