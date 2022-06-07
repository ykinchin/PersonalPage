import React from "react";

import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list}>
        <li>
          <Link to='/'>Find jobs</Link>
        </li>
        <li>
          <Link to='/employees'>Find employees</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
