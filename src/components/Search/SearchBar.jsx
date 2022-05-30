import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./SearchBar.module.scss";
import { jobSearchActions } from "../../store/reducers/search-slice";

const SearchBar = () => {
  const disputch = useDispatch();

  const onChangeHandler = (e) => {
    disputch(jobSearchActions.setSearchResult(e));
  };

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type='text'
        placeholder='job title, company'
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
