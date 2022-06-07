import React from "react";

import styles from "./Modal.module.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? styles.modalOpened : styles.modal}
      onClick={() => setActive(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
