import { createSelector } from '@reduxjs/toolkit';
import { starWarsAPI } from '../service';
import {
  filter as filterByName,
  selectByNameFilterValue,
} from '../filters/byName/slice';
import {
  filter as filterByGender,
  selectByGenderFilterValue,
} from '../filters/byGender/slice';

const selectPeople = createSelector(
  starWarsAPI.endpoints.getPeople.select(),
  (query) => {
    return query.data?.results ?? [];
  },
);

const filterByNameCreator = (people) =>
  createSelector(selectByNameFilterValue, (name) => filterByName(name, people));

const filterByGenderCreator = (people) =>
  createSelector(selectByGenderFilterValue, (name) =>
    filterByGender(name, people),
  );

export const selectFilteredPeople = createSelector(
  (state) => state,
  selectPeople,
  // Generalized filters composition
  (state, people) => {
    return [filterByNameCreator, filterByGenderCreator].reduce(
      (res, f) => f(res)(state),
      people,
    );
  },
);
