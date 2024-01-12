import './DetailsPage.scss';
import {
  useGetPersonByIdQuery,
  useGetPlanetsByIdQuery,
  useGetFilmsByIdsQuery,
  useGetSpeciesByIdsQuery,
  useGetVehiclesByIdsQuery,
  useGetStarshipsByIdsQuery,
} from '../../service';
import { useLocation } from 'react-router-dom';
import { Box, Container, Divider, Typography } from '@mui/material';

function DetailsPage() {
  const location = useLocation();
  const id = location.pathname.split('/').at(-1);
  const { data, error, isLoading } = useGetPersonByIdQuery(id);

  function getFilmsIds() {
    return data?.films.map((film) => film.split('/').at(-2));
  }

  function getSpeciesIds() {
    return data?.species.map((species) => species.split('/').at(-2));
  }

  function getVehiclesIds() {
    return data?.vehicles.map((vehicle) => vehicle.split('/').at(-2));
  }

  function getStarshipsiIds() {
    return data?.starships.map((starship) => starship.split('/').at(-2));
  }

  const {
    data: planetsData,
    error: planetsError,
    isLoading: planetsIsLoading,
  } = useGetPlanetsByIdQuery(data?.homeworld.split('/').at(-2), {
    skip: !data,
  });

  const {
    data: filmsData,
    error: filmsError,
    isLoading: filmsIsLoading,
  } = useGetFilmsByIdsQuery(getFilmsIds(), {
    skip: !data,
  });

  const {
    data: speciesData,
    error: speciesError,
    isLoading: speciesIsLoading,
  } = useGetSpeciesByIdsQuery(getSpeciesIds(), { skip: !data });

  const {
    data: vehiclesData,
    error: vehiclesError,
    isLoading: vehiclesIsLoading,
  } = useGetVehiclesByIdsQuery(getVehiclesIds(), { skip: !data });

  const {
    data: starshipsData,
    error: starshipsError,
    isLoading: starshipsIsLoading,
  } = useGetStarshipsByIdsQuery(getStarshipsiIds(), { skip: !data });

  return (
    <Container maxWidth="md">
      {error ? (
        <> An error occured. Try reloading the page.</>
      ) : isLoading ? (
        <> Loading...</>
      ) : data ? (
        <Box>
          <Typography variant="h3" className="detailes_name">
            {data.name}
          </Typography>
          <Divider>Detailed information</Divider>
          <p>Height: {data.hair_color}</p>
          <p>Mass: {data.mass}</p>
          <p>Birth year: {data.birth_year}</p>
          <p>Hair color: {data.hair_color}</p>
          <p>Skin color: {data.skin_color}</p>
          <p>Eye color: {data.eye_color}</p>
          <p>Gender: {data.gender}</p>
          <p>
            Homeworld:
            {planetsError ? (
              <> An error occured. Try reloading the page.</>
            ) : planetsIsLoading ? (
              <> Loading...</>
            ) : planetsData ? (
              <span> {planetsData.name}</span>
            ) : null}
          </p>
          <p>
            Films:
            {filmsError ? (
              <> An error occured. Try reloading the page.</>
            ) : filmsIsLoading ? (
              <> Loading...</>
            ) : filmsData ? (
              <span> {filmsData.map((film) => film.title).join(', ')}</span>
            ) : null}
          </p>
          <p>
            Species:
            {speciesError ? (
              <> An error occured. Try reloading the page.</>
            ) : speciesIsLoading ? (
              <> Loading...</>
            ) : speciesData ? (
              <span> {speciesData.map((item) => item.name).join(', ')}</span>
            ) : null}
          </p>
          <p>
            Vehicles:
            {vehiclesError ? (
              <> An error occured. Try reloading the page.</>
            ) : vehiclesIsLoading ? (
              <> Loading...</>
            ) : vehiclesData ? (
              <span> {vehiclesData.map((item) => item.name).join(', ')}</span>
            ) : null}
          </p>
          <p>
            Starships:
            {starshipsError ? (
              <> An error occured. Try reloading the page.</>
            ) : starshipsIsLoading ? (
              <> Loading...</>
            ) : starshipsData ? (
              <span> {starshipsData.map((item) => item.name).join(', ')}</span>
            ) : null}
          </p>
        </Box>
      ) : null}
    </Container>
  );
}

export default DetailsPage;
