// src/components/Banner.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from '../assets/hero-image.jpg';

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        Welcome to Imobiliária Manduri
      </Typography>
      <Typography variant="h6">
        Discover the best properties in Manduri.
      </Typography>
    </Box>
  );
};

export default Banner;