import React from "react";
import css from "./SearchBox.module.css";
  

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={css.searchBlock}>
      <label className={css.searchLabel}>
        Find contacts by name:
        <input
          className={css.searchField}
          type="text"
          value={filter}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};
export default SearchBox;
