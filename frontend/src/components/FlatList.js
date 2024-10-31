import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import { Box, Typography, Grid } from '@mui/material';
import { fetchProperties } from '../services/api';

const FlatList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    loadProperties();
  }, []);

  return (
    <Box className="section-all-re" sx={{ backgroundColor: '#fefefe', padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{color: '#4C6C73'}}>Nossas Propriedades</Typography>
      <Typography variant="body1" className="title-description" sx={{color: '#4C6C73', paddingTop: "5px", paddingBottom: '20px'}}>Encontre a casa ideal para você.</Typography>
      <Grid container spacing={3} className="row" sx={{ justifyContent: 'center' }}>
        {properties.map((property, index) => (
          <Grid item xs={12} sm={6} md={4} key={property._id || index}>
            <PropertyCard title={property.title} description={property.description} isFeatured={property.isFeatured} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlatList;