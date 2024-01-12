import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
} from '@mui/material';
import { selectByGenderFilterValue, setGenderFilter } from '../slice';
import { Gender } from '../enum';

export function Filter() {
  const dispatch = useDispatch();
  function onGenderFilterValueChange(e) {
    dispatch(setGenderFilter(e.target.value));
  }
  const byGenderFilterValue = useSelector(selectByGenderFilterValue);

  return (
    <section>
      <FormControl>
        <Typography variant="h6" mt={2}>
          Filter by character gender:
        </Typography>
        <RadioGroup
          aria-labelledby="gender-radio-buttons-group-label"
          onChange={onGenderFilterValueChange}
          value={byGenderFilterValue}
          name="gender-radio-buttons-group"
        >
          <FormControlLabel
            value={Gender.Female}
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            value={Gender.Male}
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            value={Gender.Other}
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
    </section>
  );
}
