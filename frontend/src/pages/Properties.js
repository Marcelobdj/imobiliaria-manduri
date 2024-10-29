// src/pages/Properties.js
import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/api';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

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
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Available Properties
      </Typography>
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property._id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={property.imageUrl || '/assets/default-property.jpg'}
                alt={property.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {property.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {property.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${property.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Properties;