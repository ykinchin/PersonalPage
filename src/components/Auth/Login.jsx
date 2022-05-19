import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import styles from "./LogReg.module.scss";
import { auth } from "../../firebase-config";
import { authActions } from "../../store/reducers/auth-slice";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      dispatch(authActions.login(loginEmail));
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.inputs}>
            <input
              type='text'
              placeholder='email'
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              type='text'
              placeholder='password'
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>
          <div className={styles.btns}>
            <button className={styles.action} onClick={login}>
              Log In
            </button>
            <button className={styles.nav}>
              <Link to='/registration'>Register</Link>
            </button>
          </div>
        </form>
    </div>
  );
};

export default Login;
