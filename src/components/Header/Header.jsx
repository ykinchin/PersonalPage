import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./Header.module.scss";
import logo from "./images/logo_2.png";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const name = useSelector((state) => state.auth.userName);

  const sidebarHandler = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src={logo} alt='logo' width='80px' />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to='/'>Find jobs</Link>
        <Link to='/employees'>Find employees</Link>
      </nav>
      <div className={styles.accaunt}>
        {isLoggedIn ? (
          <>
            <TiArrowSortedDown
              className={
                isSidebarOpened ? styles.sidebarOpened : styles.sidebar
              }
              onClick={sidebarHandler}
            />
            {isSidebarOpened && <Sidebar />}
            <div>{name}</div>
          </>
        ) : (
          <>
            <div className={styles.btn}>
              <Link to='/login'>Sign In</Link>
            </div>
            <div className={styles.btn}>
              <Link to='/registration'>Register</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
