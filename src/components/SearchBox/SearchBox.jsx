import { useId } from 'react';

import styles from './SearchBox.module.css';

const SearchBox = ({ searchValue, onSearch }) => {
  const searchInput = useId();
  return (
    <>
      <label htmlFor={searchInput}>Find contact by name</label>
      <input
        type='text'
        id={searchInput}
        value={searchValue}
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
    </>
  );
};

export default SearchBox;
