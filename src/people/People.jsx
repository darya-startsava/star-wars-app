import { useGetPeopleQuery } from '../service';
import { useSelector } from 'react-redux';
import { selectFilteredPeople } from './selectors';
import { Filter as FilterByName } from '../filters/byName/components/Filter';
import { Filter as FilterByGender } from '../filters/byGender/components/Filter';

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
