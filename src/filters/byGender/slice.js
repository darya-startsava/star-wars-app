import { createSlice } from '@reduxjs/toolkit';

export const byGenderSlice = createSlice({
  name: 'gender',
  initialState: '',
  reducers: {
    setGenderFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGenderFilter } = byGenderSlice.actions;
export const selectByGenderFilterValue = (state) => state.filters.gender;
export { filter } from './filter';
