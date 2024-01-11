import { createSelector } from '@reduxjs/toolkit';
import {
  filter as filterByName,
  selectByNameFilterValue,
} from '../filters/byName/slice';
import { starWarsAPI } from '../service';

export const selectPeople = createSelector(
  starWarsAPI.endpoints.getPeople.select(),
  (query) => {
    return query.data?.results ?? [];
  },
);

export const selectFilteredPeople = createSelector(
  selectByNameFilterValue,
  selectPeople,
  (name, people) => filterByName(name, people),
);
