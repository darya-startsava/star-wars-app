import { combineReducers } from '@reduxjs/toolkit';
import { byNameSlice } from './byName/slice';
import { byGenderSlice } from './byGender/slice';
import { byMassSlice } from './byMass/slice';

export const reducer = combineReducers({
  [byNameSlice.reducerPath]: byNameSlice.reducer,
  [byGenderSlice.reducerPath]: byGenderSlice.reducer,
  [byMassSlice.reducerPath]: byMassSlice.reducer,
});
