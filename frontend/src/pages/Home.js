
import React from 'react';
import FlatList from '../components/FlatList';
import Banner from '../components/Banner';
import BestFlatList from '../components/BestFlatList';
import Title from '../components/Title';

function Home() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}>
      <Banner />
      <Title title="Our Properties" description="Explore our curated list of properties" />
      <div style={{ padding: '20px 0' }}>
        <FlatList />
      </div>
      <div style={{ padding: '20px 0', background: '#f9f9f9' }}>
        <BestFlatList />
      </div>
    </div>
  );
}

export default Home;
