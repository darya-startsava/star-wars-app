import { combineReducers } from '@reduxjs/toolkit';
import { byNameSlice } from './byName/slice';
import { byGenderSlice } from './byGender/slice';

export const reducer = combineReducers({
  [byNameSlice.reducerPath]: byNameSlice.reducer,
  [byGenderSlice.reducerPath]: byGenderSlice.reducer,
});
