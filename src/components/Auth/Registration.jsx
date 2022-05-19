import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import styles from "./LogReg.module.scss";
import { auth } from "../../firebase-config";

const Registration = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Registration</h1>
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <div className={styles.inputs}>
            <input
              type='text'
              placeholder='email'
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <input
              type='text'
              placeholder='password'
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>
          <div className={styles.btns}>
            <button className={styles.action} onClick={register}>
              Sign up
            </button>
            <button className={styles.nav}>
              <Link to='/login'>Sign In</Link>
            </button>
          </div>
        </form>
    </div>
  );
};

export default Registration;
