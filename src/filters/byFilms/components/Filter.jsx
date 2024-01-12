import { useDispatch, useSelector } from 'react-redux';
import {
  CircularProgress,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { selectByFilmsFilterValue, setFilmsFilter } from '../slice';
import { useGetFilmsQuery } from '../../../service';

export function Filter() {
  const dispatch = useDispatch();
  const { isLoading, data } = useGetFilmsQuery();
  function onFilmsFilterFilmsChange(id, e) {
    dispatch(setFilmsFilter({ id, checked: e.target.checked }));
  }
  const byFilmsFilterValue = useSelector(selectByFilmsFilterValue);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <section>
      <Typography variant="h6" mb={2}>
        Filter by film:
      </Typography>
      <FormGroup>
        {data.results.map(({ url, title }) => {
          const isChecked = byFilmsFilterValue?.includes(url);
          return (
            <FormControlLabel
              key={url}
              value={url}
              control={
                <Checkbox
                  value={isChecked}
                  onChange={(e) => onFilmsFilterFilmsChange(url, e)}
                  checked={isChecked}
                />
              }
              label={title}
            />
          );
        })}
      </FormGroup>
    </section>
  );
}
