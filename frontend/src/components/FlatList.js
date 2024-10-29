// src/components/FlatList.js

import React from 'react';
import Title from './Title';
import FlatItem from './FlatItem';
import { Grid, Box } from '@mui/material';

const FlatList = () => {
  const title = {
    text: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet"
  };

  return (
    <Box className="section-all-re" sx={{ padding: '20px' }}>
      <Box className="container" sx={{ textAlign: 'center', mb: 4 }}>
        <Title title={title.text} description={title.description} />
      </Box>
      <Grid container spacing={3} className="row">
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlatItem slug={`lorem-ipsum-${index + 1}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlatList;