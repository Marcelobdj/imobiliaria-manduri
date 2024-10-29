// src/components/FlatItem.js

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const FlatItem = ({ slug }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
      {/* Image Section */}
      <CardMedia
        component="img"
        height="180"
        image="/img/product1.jpeg" // Adjust this path to your actual image location
        alt="Property Image"
      />

      {/* Description Section */}
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="h6" color="text.secondary">
            $1000
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography variant="body2">
            <i className="fas fa-check-circle" /> Lorem ipsum dolor
          </Typography>
          <Typography variant="body2">
            <i className="fas fa-check-circle" /> Lorem
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button component={Link} to={`/flat/${slug}`} variant="contained" color="primary">
            View
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FlatItem;