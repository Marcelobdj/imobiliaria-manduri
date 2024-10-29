// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none', padding: '10px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo Section */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: '#333' }}>
          Imobiliária Manduri
        </Typography>
        
        {/* Navbar Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: '#333', fontWeight: 'bold' }}>
            Home
          </Button>
          <Button component={Link} to="/properties" sx={{ color: '#333', fontWeight: 'bold' }}>
            Properties
          </Button>
          <Button component={Link} to="/about" sx={{ color: '#333', fontWeight: 'bold' }}>
            About Us
          </Button>
          <Button component={Link} to="/contact" sx={{ color: '#333', fontWeight: 'bold' }}>
            Contact
          </Button>
        </Box>

        {/* Login/Sign-Up Button */}
        <Button component={Link} to="/login" variant="contained" sx={{ backgroundColor: '#3a86ff', color: '#fff' }}>
          Admin Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;