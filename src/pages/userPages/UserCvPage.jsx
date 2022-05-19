import React from "react";

import styles from "./UserCvPage.module.scss";
import Layout from "../../components/Layout/Layout";

const UserCvPage = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>My CV</h1>
      </div>
    </Layout>
  );
};

export default UserCvPage;
