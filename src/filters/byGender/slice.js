import { createSlice } from '@reduxjs/toolkit';
import { resetFilters } from '../actions';

const initialState = '';

export const byGenderSlice = createSlice({
  name: 'gender',
  initialState,
  extraReducers: (builder) => builder.addCase(resetFilters, () => initialState),
  reducers: {
    setGenderFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGenderFilter } = byGenderSlice.actions;
export const selectByGenderFilterValue = (state) => state.filters.gender;
export { filter } from './filter';
