import { createSlice } from '@reduxjs/toolkit';

export const byMassSlice = createSlice({
  name: 'mass',
  initialState: { min: '', max: '' },
  reducers: {
    setMassFilterMin: (state, action) => {
      state.min = action.payload;
      return state;
    },
    setMassFilterMax: (state, action) => {
      state.max = action.payload;
      return state;
    },
  },
});

export const { setMassFilterMin, setMassFilterMax } = byMassSlice.actions;
export const selectByMassFilterValueMin = (state) => state.filters.mass.min;
export const selectByMassFilterValueMax = (state) => state.filters.mass.max;
export { filter } from './filter';
