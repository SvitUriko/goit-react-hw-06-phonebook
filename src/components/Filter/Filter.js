import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { setFilters } from 'redux/filtersSlice';

export const Filter = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Find contact by name</h3>
      <Input
        type="text"
        name="filter"
        onChange={() => {
          dispatch(setFilters(name));
        }}
      />
    </>
  );
};
