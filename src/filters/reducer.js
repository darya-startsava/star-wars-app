import { combineReducers } from '@reduxjs/toolkit';
import { byNameSlice } from './byName/slice';

export const reducer = combineReducers({
  [byNameSlice.reducerPath]: byNameSlice.reducer,
});
