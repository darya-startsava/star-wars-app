import { createSlice } from '@reduxjs/toolkit';

export const byNameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
    setNameFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setNameFilter } = byNameSlice.actions;
export const selectByNameFilterValue = (state) => state.filters.name;
export { filter } from './filter';
