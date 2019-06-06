import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue tc"
        type="search"
        id="searchBox"
        placeholder="search your robot"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
