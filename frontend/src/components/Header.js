
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2A2B2E', boxShadow: 'none', padding: '10px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo Section */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: '#FFFFFF' }}>
          Imobiliária Manduri
        </Typography>
        
        {/* Navbar Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: '#FFFFFF', fontWeight: 'bold', '&:hover': { color: '#F39C12' } }}>
            Home
          </Button>
          <Button component={Link} to="/properties" sx={{ color: '#FFFFFF', fontWeight: 'bold', '&:hover': { color: '#F39C12' } }}>
            Properties
          </Button>
          <Button component={Link} to="/about" sx={{ color: '#FFFFFF', fontWeight: 'bold', '&:hover': { color: '#F39C12' } }}>
            About Us
          </Button>
          <Button component={Link} to="/contact" sx={{ color: '#FFFFFF', fontWeight: 'bold', '&:hover': { color: '#F39C12' } }}>
            Contact
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: '#FFFFFF' }}>
          <MenuIcon />
        </IconButton>

        {/* Login/Sign-Up Button */}
        <Button component={Link} to="/login" variant="contained" sx={{ backgroundColor: '#F39C12', color: '#2A2B2E', '&:hover': { backgroundColor: '#FFFFFF' } }}>
          Admin Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
