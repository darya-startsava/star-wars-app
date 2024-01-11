import { createSlice } from '@reduxjs/toolkit';
import { resetFilters } from '../actions';

const initialState = { min: '', max: '' };

export const byMassSlice = createSlice({
  name: 'mass',
  initialState,
  extraReducers: (builder) => builder.addCase(resetFilters, () => initialState),
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
