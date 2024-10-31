
import React from 'react';
import PropertyCard from './PropertyCard';
import { Box, Typography } from '@mui/material';

const BestFlatList = () => {
  return (
    <Box className="section-best-estate" sx={{ padding: '40px', textAlign: 'center', backgroundColor: '#fefefe'}}>
      <Typography variant="h4" sx={{color: '#4C6C73'}}>
        Não perca essas oportunidades
      </Typography>
      <Typography variant="body1" className="title-description" sx={{color: '#4C6C73', paddingTop: "5px", paddingBottom: '20px'}}>
        Explore nossa seleção de propriedades em destaque.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        {[...Array(3)].map((_, index) => (
          <PropertyCard
            key={index}
            title={`Featured Property ${index + 1}`}
            description="A description of this featured property."
            isFeatured={true}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BestFlatList;
