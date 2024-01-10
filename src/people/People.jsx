import { useGetPeopleQuery } from '../service';
import { useEffect } from 'react';

export default function People() {
  const { data, error, isLoading } = useGetPeopleQuery();
  useEffect(() => {
  }, [data]);
  if (isLoading) {
    return 'Loading...';
  }
  if (data) {
    return (
      <ul>
        {data.results.map(({ url, name }) => (
          <li key={url}>
            <div>{name}</div>
          </li>
        ))}
      </ul>
    );
  }
}
