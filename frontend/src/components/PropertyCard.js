
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PropertyCard = ({ title, description, isFeatured }) => {
  return (
    <Card
      sx={{
        width: '300px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 3,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
        ...(isFeatured && {
          '&::before': {
            content: '"Em destaque"',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#224459',
            color: '#fff',
            padding: '5px 10px',
            fontWeight: 'bold',
            borderRadius: '0 0 5px 0',
            fontSize: '0.8rem',
            animation: 'fadeIn 0.5s ease-in-out',
          }
        })
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
