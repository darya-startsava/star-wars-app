import { selectByNameFilterValue, setNameFilter } from '../slice';
import { useDispatch, useSelector } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();
  function onNameFilterValueChange(e) {
    dispatch(setNameFilter(e.target.value));
  }
  const byNameFilterValue = useSelector(selectByNameFilterValue);

  return (
    <section>
      <input
        type="text"
        onChange={onNameFilterValueChange}
        value={byNameFilterValue}
      />
    </section>
  );
}
