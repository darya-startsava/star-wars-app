import './DetailsPage.scss';
import {
  useGetPersonByIdQuery,
  useGetPlanetsByIdQuery,
  useGetFilmsByIdsQuery,
} from '../../service';
import { useLocation } from 'react-router-dom';

function DetailsPage() {
  const location = useLocation();
  const id = location.pathname.split('/').at(-1);
  const { data, error, isLoading } = useGetPersonByIdQuery(id);
  function getFilmsIds() {
    return data?.films.map((film) => film.split('/').at(-2));
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

  console.log(filmsData);
  return (
    <div>
      Details Page
      {error ? (
        <> An error occured. Try reloading the page.</>
      ) : isLoading ? (
        <> Loading...</>
      ) : data ? (
        <div>
          <p>Name: {data.name}</p>
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
        </div>
      ) : null}
    </div>
  );
}

export default DetailsPage;
