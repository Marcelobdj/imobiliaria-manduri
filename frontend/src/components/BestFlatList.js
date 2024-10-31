import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import { Box, Typography } from '@mui/material';
import { fetchProperties } from '../services/api';

const BestFlatList = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    const loadFeaturedProperties = async () => {
      try {
        const data = await fetchProperties();
        setFeaturedProperties(data.filter(property => property.isFeatured));
      } catch (error) {
        console.error("Error fetching featured properties:", error);
      }
    };
    loadFeaturedProperties();
  }, []);

  return (
    <Box className="section-best-estate" sx={{ padding: '40px', textAlign: 'center', backgroundColor: '#fefefe'}}>
      <Typography variant="h4" sx={{color: '#4C6C73'}}>Não perca essas oportunidades</Typography>
      <Typography variant="body1" className="title-description" sx={{color: '#4C6C73', paddingTop: "5px", paddingBottom: '20px'}}>Explore nossa seleção de propriedades em destaque.</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        {featuredProperties.map((property) => (
          <PropertyCard
            key={property._id}
            title={property.title}
            description={property.description}
            isFeatured={true}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BestFlatList;