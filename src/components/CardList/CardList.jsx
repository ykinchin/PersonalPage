import React from "react";

import styles from "./CardList.module.scss";
import ShortCard from "../Card/ShortCard";
import DetailedCard from "../Card/DetailedCard";

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <div className={styles.shortCards}>
        <ShortCard />
      </div>
      <div className={styles.detailedCards}>
        <DetailedCard />
      </div>
    </div>
  );
};

export default CardList;
