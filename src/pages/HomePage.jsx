import React from 'react';

import Layout from '../components/Layout/Layout';
import SearchBar from '../components/Search/SearchBar';
import MainPage from './MainPage';

const HomePage = () => {
  return (
    <Layout>
        <SearchBar/>
        <MainPage/>
    </Layout>
  )
}

export default HomePage