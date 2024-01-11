import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { starWarsAPI } from './service';
import { reducer } from './filters/reducer';

export const store = configureStore({
  reducer: combineReducers({
    [starWarsAPI.reducerPath]: starWarsAPI.reducer,
    filters: reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsAPI.middleware),
});
