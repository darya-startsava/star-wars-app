import { createSlice } from '@reduxjs/toolkit';
import { resetFilters } from '../actions';

const initialState = '';

export const byNameSlice = createSlice({
  name: 'name',
  initialState,
  extraReducers: (builder) => builder.addCase(resetFilters, () => initialState),
  reducers: {
    setNameFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setNameFilter } = byNameSlice.actions;
export const selectByNameFilterValue = (state) => state.filters.name;
export { filter } from './filter';
