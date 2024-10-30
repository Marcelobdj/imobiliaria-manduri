
import React, { useEffect, useState } from 'react';
import { fetchProperties, createProperty, updateProperty, deleteProperty } from '../services/api';
import FlatList from '../components/FlatList';
import FlatItem from '../components/FlatItem';
import { TextField, Button, Typography, Grid, Snackbar, Alert, Box } from '@mui/material';

function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', price: '', location: '' });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await fetchProperties();
      setProperties(data);
    } catch (error) {
      setFeedbackMessage('Failed to load properties');
      setOpenSnackbar(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await updateProperty(currentId, formData);
        setFeedbackMessage('Property updated successfully');
      } else {
        await createProperty(formData);
        setFeedbackMessage('Property added successfully');
      }
      setFormData({ title: '', description: '', price: '', location: '' });
      setEditMode(false);
      setCurrentId(null);
      loadProperties();
    } catch (error) {
      setFeedbackMessage('An error occurred');
    }
    setOpenSnackbar(true);
  };

  const handleEdit = (property) => {
    setFormData(property);
    setEditMode(true);
    setCurrentId(property._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProperty(id);
      setFeedbackMessage('Property deleted successfully');
      setProperties(properties.filter(property => property._id !== id));
    } catch (error) {
      setFeedbackMessage('An error occurred');
    }
    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {editMode ? 'Update Property' : 'Add Property'}
            </Button>
          </Grid>
        </Grid>
      </form>

      <FlatList>
        {properties.map(property => (
          <FlatItem 
            key={property._id} 
            title={property.title} 
            description={property.description} 
            price={property.price} 
            location={property.location}
            onEdit={() => handleEdit(property)}
            onDelete={() => handleDelete(property._id)}
          />
        ))}
      </FlatList>

      {/* Snackbar for feedback messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="info" sx={{ width: '100%' }}>
          {feedbackMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AdminDashboard;
