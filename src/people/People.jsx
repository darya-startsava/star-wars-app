import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetFilmsQuery, useGetPeopleQuery } from '../service';
import { selectFilteredPeople } from './selectors';
import { Filter as FilterByName } from '../filters/byName/components/Filter';
import { Filter as FilterByGender } from '../filters/byGender/components/Filter';
import { Filter as FilterByMass } from '../filters/byMass/components/Filter';
import { Filter as FilterByFilms } from '../filters/byFilms/components/Filter';
import { resetFilters } from '../filters/actions';

export default function People() {
  const dispatch = useDispatch();
  const { isLoading } = useGetPeopleQuery();
  const { isLoading: isFilmsLoading, data: films } = useGetFilmsQuery();
  const filteredPeople = useSelector(selectFilteredPeople);

  function onResetButtonClick() {
    dispatch(resetFilters());
  }

  function getCharacterFilms(character) {
    return character.films.map(
      (id) => films.results.find((film) => film.url === id).title,
    );
  }

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <FilterByName />
      <FilterByGender />
      <FilterByMass />
      <FilterByFilms />
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={onResetButtonClick}
        >
          Reset
        </Button>
      </div>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {filteredPeople.map((character) => {
          const { url, name, gender, mass, birth_year } = character;
          const characterFilms = films ? getCharacterFilms(character) : [];
          return (
            <Grid key={url} item xs={6} sm={4} md={3}>
              {/*TODO: extract to separate component*/}
              <Card>
                <CardActionArea
                  component={Link}
                  to={`/details/${url.split('/').at(-2)}`}
                >
                  <CardContent>
                    <CardHeader
                      title={name}
                      subheader={`Birth Year: ${birth_year}`}
                    />
                    <Typography>Gender: {gender}</Typography>
                    <Typography>Mass: {mass}</Typography>
                    <Typography>Films:</Typography>
                    {isFilmsLoading
                      ? 'Loading...'
                      : characterFilms.map((film) => (
                          <Chip key={film} size="small" label={film} />
                        ))}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
