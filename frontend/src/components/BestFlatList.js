// src/components/BestFlatList.js

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const BestFlatList = () => {
  return (
    <Box className="best-flat-list" sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Featured Properties
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Explore our handpicked selection of the best properties.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        {[...Array(3)].map((_, index) => (
          <Card
            key={index}
            sx={{
              width: '300px',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '"Featured"',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'rgba(255,0,0,0.7)',
                color: '#fff',
                padding: '5px 10px',
                fontWeight: 'bold',
                borderRadius: '0 0 5px 0'
              }
            }}
          >
            <CardContent>
              <Typography variant="h6">Property {index + 1}</Typography>
              <Typography variant="body2">A description of this featured property.</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default BestFlatList;