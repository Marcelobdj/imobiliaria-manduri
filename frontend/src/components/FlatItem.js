
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const FlatItem = ({ slug }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        margin: 'auto', 
        backgroundColor: '#FFFFFF', 
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', 
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { transform: 'scale(1.05)' } 
      }}
    >
      {/* Image Section with Hover Effect */}
      <CardMedia
        component="img"
        height="180"
        image="/img/product1.jpeg" // Adjust this path to your actual image location
        alt="Property Image"
        sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.1)' } }}
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
          <Button 
            component={Link} 
            to={`/flat/${slug}`} 
            variant="contained" 
            color="primary"
            sx={{ 
              backgroundColor: '#F39C12', 
              '&:hover': { backgroundColor: '#2C3E50' }
            }}
          >
            View
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FlatItem;
