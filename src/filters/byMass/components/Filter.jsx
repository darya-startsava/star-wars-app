import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Typography } from '@mui/material';
import {
  setMassFilterMin,
  setMassFilterMax,
  selectByMassFilterValueMin,
  selectByMassFilterValueMax,
} from '../slice';

export function Filter() {
  const dispatch = useDispatch();
  function onMassFilterValueMinChange(e) {
    dispatch(setMassFilterMin(e.target.value));
  }
  function onMassFilterValueMaxChange(e) {
    dispatch(setMassFilterMax(e.target.value));
  }
  const byMassFilterValueMin = useSelector(selectByMassFilterValueMin);
  const byMassFilterValueMax = useSelector(selectByMassFilterValueMax);

  return (
    <section>
      <Box>
        <Typography variant="h6">Filter by mass range</Typography>
        <TextField
          label="Min. mass"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={byMassFilterValueMin}
          onChange={onMassFilterValueMinChange}
        />
        <span>-</span>
        <TextField
          label="Max. mass"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={byMassFilterValueMax}
          onChange={onMassFilterValueMaxChange}
        />
      </Box>
    </section>
  );
}
