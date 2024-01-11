import { useGetPeopleQuery } from '../service';
import { useSelector } from 'react-redux';
import { selectFilteredPeople } from './selectors';
import { Filter as FilterByName } from '../filters/byName/components/Filter';

export default function People() {
  const { isLoading } = useGetPeopleQuery();
  const filteredPeople = useSelector(selectFilteredPeople);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <FilterByName />
      <ul>
        {filteredPeople.map(({ url, name }) => (
          <li key={url}>
            <div>{name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
