import React, { useEffect, useState } from 'react';
import { fetchProperties, createProperty, updateProperty, deleteProperty } from '../services/api';
import { TextField, Button, Typography, Grid, Snackbar, Alert, Box, Checkbox, FormControlLabel } from '@mui/material';

function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', price: '', location: '', isFeatured: false });
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCreateOrUpdate = async () => {
    try {
      if (editMode) {
        await updateProperty(currentId, formData);
        setFeedbackMessage('Property updated successfully');
      } else {
        await createProperty(formData);
        setFeedbackMessage('Property created successfully');
      }
      setOpenSnackbar(true);
      loadProperties();
      resetForm();
    } catch (error) {
      setFeedbackMessage('Failed to save property');
      setOpenSnackbar(true);
    }
  };

  const handleEdit = (property) => {
    setFormData({
      title: property.title,
      description: property.description,
      price: property.price,
      location: property.location,
      isFeatured: property.isFeatured || false,
    });
    setCurrentId(property._id);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProperty(id);
      setFeedbackMessage('Property deleted successfully');
      setOpenSnackbar(true);
      loadProperties();
    } catch (error) {
      setFeedbackMessage('Failed to delete property');
      setOpenSnackbar(true);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', price: '', location: '', isFeatured: false });
    setEditMode(false);
    setCurrentId(null);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, mb: 4 }}>
        <TextField label="Title" name="title" value={formData.title} onChange={handleInputChange} fullWidth />
        <TextField label="Description" name="description" value={formData.description} onChange={handleInputChange} fullWidth />
        <TextField label="Price" name="price" value={formData.price} onChange={handleInputChange} type="number" fullWidth />
        <TextField label="Location" name="location" value={formData.location} onChange={handleInputChange} fullWidth />
        <FormControlLabel
          control={<Checkbox checked={formData.isFeatured} onChange={handleInputChange} name="isFeatured" />}
          label="Featured Property"
        />
        <Button variant="contained" onClick={handleCreateOrUpdate}>{editMode ? 'Update Property' : 'Create Property'}</Button>
        {editMode && <Button variant="outlined" onClick={resetForm}>Cancel Edit</Button>}
      </Box>
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property._id}>
            <Typography>{property.title}</Typography>
            <Button variant="outlined" onClick={() => handleEdit(property)}>Edit</Button>
            <Button variant="outlined" color="error" onClick={() => handleDelete(property._id)}>Delete</Button>
          </Grid>
        ))}
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>{feedbackMessage}</Alert>
      </Snackbar>
    </Box>
  );
}

export default AdminDashboard;