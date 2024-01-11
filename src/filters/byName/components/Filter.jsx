import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { selectByNameFilterValue, setNameFilter } from '../slice';

export function Filter() {
  const dispatch = useDispatch();
  function onNameFilterValueChange(e) {
    dispatch(setNameFilter(e.target.value));
  }
  const byNameFilterValue = useSelector(selectByNameFilterValue);

  return (
    <section>
      <TextField
        label="Filter by character name"
        variant="outlined"
        value={byNameFilterValue}
        onChange={onNameFilterValueChange}
      />
    </section>
  );
}
