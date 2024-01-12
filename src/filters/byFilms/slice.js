import { createSlice } from '@reduxjs/toolkit';
import { resetFilters } from '../actions';

const initialState = [];

export const byFilmsSlice = createSlice({
  name: 'films',
  initialState,
  extraReducers: (builder) => builder.addCase(resetFilters, () => initialState),
  reducers: {
    setFilmsFilter: (state, action) => {
      const { id, checked } = action.payload;
      if (checked) {
        state.push(id);
        return state;
      }
      return state.filter((filmId) => filmId !== id);
    },
  },
});

export const { setFilmsFilter } = byFilmsSlice.actions;
export const selectByFilmsFilterValue = (state) => state.filters.films;
export { filter } from './filter';
