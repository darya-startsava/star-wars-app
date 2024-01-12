import { useSelector } from 'react-redux';
import {
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
import './People.scss';

export default function People() {
  const { isLoading } = useGetPeopleQuery();
  const { isLoading: isFilmsLoading, data: films } = useGetFilmsQuery();
  const filteredPeople = useSelector(selectFilteredPeople);

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
      <Grid
        container
        alignItems="stretch"
        // rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {filteredPeople.map((character) => {
          const { url, name, gender, mass, birth_year } = character;
          const characterFilms = films ? getCharacterFilms(character) : [];
          return (
            <Grid
              key={url}
              item
              xs={6}
              sm={4}
              md={3}
              component={Card}
              sx={{ margin: 1 }}
              className="person-card"
            >
              {/*TODO: extract to separate component*/}
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
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
