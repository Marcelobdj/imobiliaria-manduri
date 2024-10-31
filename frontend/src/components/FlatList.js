
import React from 'react';
import PropertyCard from './PropertyCard';
import { Box, Typography, Grid } from '@mui/material';

const FlatList = () => {
  return (
    <Box className="section-all-re" sx={{ backgroundColor: '#fefefe', padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{color: '#4C6C73'}}>
        Nossas Propriedades
      </Typography>
      <Typography variant="body1" className="title-description" sx={{color: '#4C6C73', paddingTop: "5px", paddingBottom: '20px'}}>
        Encontre a casa ideal para você.
      </Typography>
      <Grid container spacing={3} className="row" sx={{ justifyContent: 'center' }}>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PropertyCard title={`Property ${index + 1}`} description="A lovely place to live." isFeatured={false} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlatList;
