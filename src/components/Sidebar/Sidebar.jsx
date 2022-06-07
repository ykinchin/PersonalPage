import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import styles from "./Sidebar.module.scss";
import { authActions } from "../../store/reducers/auth-slice";
import { auth } from "../../firebase-config";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const name = useSelector((state) => state.auth.userName);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    signOut(auth);
    dispatch(authActions.logout());
    navigate("/", { replace: true });
  };

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list}>
        <li className={styles.userName}>{name}</li>
        <li>
          <Link to='/user/cvs'>My CV</Link>
        </li>
        <li>
          <Link to='/user/followed-jobs'>Followed jobs</Link>
        </li>
        <li>
          <Link to='/user/post-cv'>Post my CV</Link>
        </li>
        <li>
          <Link to='/user/post-a-job'>Post a Job</Link>
        </li>
        <li className={styles.logout} onClick={logoutHandler}>
          Logout
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
