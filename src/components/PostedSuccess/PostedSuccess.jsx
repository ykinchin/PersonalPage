import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import styles from "./PostedSuccess.module.scss";

const PostedSuccess = ({text,link, linkName}) => {
  return (
    <div className={styles.success}>
      <BsFillCheckCircleFill className={styles.icon} /> {text}
      <Link to={link} className={styles.navBtn}>
        {linkName}
      </Link>
    </div>
  );
};

export default PostedSuccess;
