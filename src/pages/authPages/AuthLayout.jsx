import React from "react";

import styles from './AuthLayout.module.scss';
import logo from '../../components/Header/images/logo_2.png'
import { Link } from "react-router-dom";

const AuthLayout = ({children}) => {
  return (
    <section className={styles.layout}>
      <header className={styles.logo}><Link to='/'><img src={logo} alt='logo' width='80' /></Link></header>
      <main className={styles.main}>{children}</main>
    </section>
  );
};

export default AuthLayout;
