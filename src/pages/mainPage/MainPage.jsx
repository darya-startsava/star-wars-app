import './MainPage.scss';
import People from '../../people/People';
import Filters from '../../filters/Filters/Filters';
import { Grid } from '@mui/material';

function MainPage() {
  return (
    <Grid container spacing={2}>
      <Grid item md={2} sm={3} xs={4} className="filters">
        <Filters />
      </Grid>
      <Grid item md={10} sm={9} xs={8}>
        <People />
      </Grid>
    </Grid>
  );
}

export default MainPage;
