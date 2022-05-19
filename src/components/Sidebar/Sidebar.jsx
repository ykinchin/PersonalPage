import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";

import styles from './Sidebar.module.scss';
import { authActions } from "../../store/reducers/auth-slice";
import { auth } from "../../firebase-config";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const logoutHandler = () => {
        signOut(auth);
        dispatch(authActions.logout());
        navigate('/', {replace:true})
      };


  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list}>
        <li> <Link to='/user/profile'>My profile</Link></li>
        <li> <Link to='/user/cvs'>My CVs</Link></li>
        <li><Link to='/user/followed-jobs'>Followed jobs</Link></li>
        <li><Link to='/user/post-a-job'>Post a Job</Link></li>
        <li className={styles.logout} onClick={logoutHandler}>Logout</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
