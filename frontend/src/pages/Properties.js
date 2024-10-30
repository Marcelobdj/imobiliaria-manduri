
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
            <Card sx={{ maxWidth: 345, boxShadow: 3, transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia
                component="img"
                height="140"
                image={property.imageUrl || '/assets/default-property.jpg'}
                alt={property.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {property.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Location: {property.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', mt: 1 }}>
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
