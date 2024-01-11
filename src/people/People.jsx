import { useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { useGetPeopleQuery } from '../service';
import { selectFilteredPeople } from './selectors';
import { Filter as FilterByName } from '../filters/byName/components/Filter';
import { Filter as FilterByGender } from '../filters/byGender/components/Filter';
import { Filter as FilterByMass } from '../filters/byMass/components/Filter';

export default function People() {
  const { isLoading } = useGetPeopleQuery();
  const filteredPeople = useSelector(selectFilteredPeople);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <FilterByName />
      <FilterByGender />
      <FilterByMass />
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {filteredPeople.map(({ url, name, gender, mass, birth_year }) => (
          <Grid key={url} item xs={6} sm={4} md={3}>
            <Card>
              <CardContent>
                <CardHeader
                  title={name}
                  subheader={`Birth Year: ${birth_year}`}
                />
                <Typography>
                  <ul>
                    <li>Gender: {gender}</li>
                    <li>Mass: {mass}</li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
