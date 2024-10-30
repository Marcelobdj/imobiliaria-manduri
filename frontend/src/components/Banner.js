
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroImage from '../assets/hero-image.jpg';
import { keyframes } from '@mui/system';

// Define fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        animation: `${fadeIn} 2s ease-in`,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
        Welcome to Imobiliária Manduri
      </Typography>
      <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, mb: 3 }}>
        Discover the best properties in Manduri.
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#3498DB', '&:hover': { backgroundColor: '#2C3E50' } }}>
        Explore Now
      </Button>
    </Box>
  );
};

export default Banner;
