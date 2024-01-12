import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Typography } from '@mui/material';
import {
  setMassFilterMin,
  setMassFilterMax,
  selectByMassFilterValueMin,
  selectByMassFilterValueMax,
} from '../slice';
import './Filter.scss';

export function Filter() {
  const dispatch = useDispatch();

  function onMassFilterValueMinChange(e) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    dispatch(setMassFilterMin(e.target.value));
  }
  function onMassFilterValueMaxChange(e) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    dispatch(setMassFilterMax(e.target.value));
  }
  const byMassFilterValueMin = useSelector(selectByMassFilterValueMin);
  const byMassFilterValueMax = useSelector(selectByMassFilterValueMax);

  return (
    <section>
      <Box>
        <Typography variant="h6" mb={2}>
          Filter by mass range:
        </Typography>
        <TextField
          label="Min. mass"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={byMassFilterValueMin}
          onChange={onMassFilterValueMinChange}
          sx={{
            width: 100,
            marginBottom: 1,
          }}
        />
        <span className="range-separator"></span>
        <TextField
          label="Max. mass"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={byMassFilterValueMax}
          onChange={onMassFilterValueMaxChange}
          sx={{
            width: 100,
            marginBottom: 1,
          }}
        />
      </Box>
    </section>
  );
}
