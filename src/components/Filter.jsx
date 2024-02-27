import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../redux/ContactSlide';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <label>
      Filter contacts by name:
      <input type="text" value={String(filter)} onChange={handleChange} />
    </label>
  );
};

export default Filter;
