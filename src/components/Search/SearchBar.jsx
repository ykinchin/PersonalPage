import React from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <input type='text' placeholder='job title, keywords, or company' />
      <button className={styles.btn}>Find a job</button>
    </div>
  );
};

export default SearchBar;
