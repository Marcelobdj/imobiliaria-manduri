// src/pages/Home.js

import React from 'react';
import FlatList from '../components/FlatList';
import Banner from '../components/Banner';
import BestFlatList from '../components/BestFlatList'; // Adjusted path
import Title from '../components/Title'; // Import Title component if required

function Home() {
  return (
    <div>
      <Banner />
      <Title title="Our Properties" description="Explore our curated list of properties" />
      <FlatList />
      <BestFlatList />
    </div>
  );
}

export default Home;