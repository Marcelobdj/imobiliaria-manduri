
import React from 'react';
import FlatList from '../components/FlatList';
import Banner from '../components/Banner';
import BestFlatList from '../components/BestFlatList';

function Home() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}>
      <Banner />
      <div>
        <BestFlatList />
      </div>
      <div>
        <FlatList />
      </div>
    </div>
  );
}

export default Home;
