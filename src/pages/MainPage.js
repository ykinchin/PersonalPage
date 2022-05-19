import React from 'react';
import CardList from '../components/CardList/CardList';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main}>
        <div className={styles.cardMenu}>
            <div><CardList/></div>
        </div>
    </div>
  )
}

export default MainPage