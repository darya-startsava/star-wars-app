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

import {
  filter as filterByMass,
  selectByMassFilterValueMin,
  selectByMassFilterValueMax,
} from '../filters/byMass/slice';

const selectPeople = createSelector(
  starWarsAPI.endpoints.getPeople.select(),
  (query) => {
    return query.data?.results ?? [];
  },
);

const filterByNameCreator = (people) =>
  createSelector(selectByNameFilterValue, (name) => filterByName(name, people));

const filterByGenderCreator = (people) =>
  createSelector(selectByGenderFilterValue, (gender) =>
    filterByGender(gender, people),
  );

const filterByMassCreator = (people) =>
  createSelector(
    selectByMassFilterValueMin,
    selectByMassFilterValueMax,
    (min, max) => filterByMass(min, max, people),
  );

export const selectFilteredPeople = createSelector(
  (state) => state,
  selectPeople,
  // Generalized filters composition
  (state, people) => {
    return [
      filterByNameCreator,
      filterByGenderCreator,
      filterByMassCreator,
    ].reduce((res, f) => f(res)(state), people);
  },
);
