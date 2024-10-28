// src/pages/Properties.js
import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/api';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      const data = await fetchProperties();
      setProperties(data);
    };
    loadProperties();
  }, []);

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>Available Properties</Typography>
      <List>
        {properties.map(property => (
          <ListItem key={property._id} style={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText
              primary={property.title}
              secondary={`Location: ${property.location} | Price: $${property.price}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Properties;