import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { Filter as FilterByName } from '../byName/components/Filter';
import { Filter as FilterByGender } from '../byGender/components/Filter';
import { Filter as FilterByMass } from '../byMass/components/Filter';
import { Filter as FilterByFilms } from '../byFilms/components/Filter';
import { resetFilters } from '../actions';
import './Filters.scss';

export default function Filters() {
  const dispatch = useDispatch();

  function onResetButtonClick() {
    dispatch(resetFilters());
  }

  return (
    <div className="filters_wrapper">
      <FilterByName />
      <FilterByGender />
      <FilterByMass />
      <FilterByFilms />
      <div className="reset-button_wrapper">
        <Button
          variant="contained"
          color="primary"
          onClick={onResetButtonClick}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
