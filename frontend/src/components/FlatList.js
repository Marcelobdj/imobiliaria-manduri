
import React from 'react';
import Title from './Title';
import FlatItem from './FlatItem';
import { Grid, Box } from '@mui/material';

const FlatList = () => {
  const title = {
    text: "Our Properties",
    description: "Explore our curated list of properties"
  };

  return (
    <Box className="section-all-re" sx={{ backgroundColor: '#f4f4f9', padding: '20px', textAlign: 'center' }}>
      <Box className="container" sx={{ mb: 4 }}>
        <Title title={title.text} description={title.description} />
      </Box>
      <Grid container spacing={3} className="row" sx={{ justifyContent: 'center' }}>
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
