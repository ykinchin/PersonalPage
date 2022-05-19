import React from "react";

import styles from "./Layout.module.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.main}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
