import { useDispatch, useSelector } from 'react-redux';
import { TextField, Typography } from '@mui/material';
import { selectByNameFilterValue, setNameFilter } from '../slice';

export function Filter() {
  const dispatch = useDispatch();
  function onNameFilterValueChange(e) {
    dispatch(setNameFilter(e.target.value));
  }
  const byNameFilterValue = useSelector(selectByNameFilterValue);

  return (
    <section>
      <Typography variant="h6" mb={2}>
        Filter by character name:
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={byNameFilterValue}
        onChange={onNameFilterValueChange}
      />
    </section>
  );
}
