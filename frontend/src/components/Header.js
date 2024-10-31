
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fefefe', boxShadow: 'none', padding: '10px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo Section */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: '#51718C', '&:hover': { color: '#224459' } }}>
          Imobiliária Manduri
        </Typography>
        
        {/* Navbar Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: '#51718C', fontWeight: 'bold', '&:hover': { color: '#224459' } }}>
            Home
          </Button>
          <Button component={Link} to="/properties" sx={{ color: '#51718C', fontWeight: 'bold', '&:hover': { color: '#224459' } }}>
            Propriedades
          </Button>
          <Button component={Link} to="/about" sx={{ color: '#51718C', fontWeight: 'bold', '&:hover': { color: '#224459' } }}>
            Sobre
          </Button>
          <Button component={Link} to="/contact" sx={{ color: '#51718C', fontWeight: 'bold', '&:hover': { color: '#224459' } }}>
            Contato
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: '#51718C' }}>
          <MenuIcon />
        </IconButton>

        {/* Login/Sign-Up Button */}
        <Button component={Link} to="/login" variant="contained" sx={{ backgroundColor: '#FFFFFF', color: '#283940', '&:hover': { backgroundColor: '#79DCF2' } }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
