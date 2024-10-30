
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C3E50', padding: '0.5em 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          Imobiliária Manduri
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 'bold', color: '#fff', '&:hover': { color: '#F39C12' } }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/properties" sx={{ fontWeight: 'bold', color: '#fff', '&:hover': { color: '#F39C12' } }}>
            Properties
          </Button>
          <Button color="inherit" component={Link} to="/admin" sx={{ fontWeight: 'bold', color: '#fff', '&:hover': { color: '#F39C12' } }}>
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
