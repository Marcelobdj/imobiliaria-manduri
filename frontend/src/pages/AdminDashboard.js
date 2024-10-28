// src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, List, ListItem, ListItemText, Container } from '@mui/material';
import { fetchProperties, createProperty, updateProperty, deleteProperty } from '../services/api';

function AdminDashboard() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', price: '', location: '' });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      loadProperties();
    }
  }, [navigate]);

  const loadProperties = async () => {
    try {
      const data = await fetchProperties();
      setProperties(data);
    } catch (error) {
      setFeedbackMessage('Failed to load properties');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const response = await updateProperty(currentId, formData);
        setFeedbackMessage(response.message || 'Property updated successfully');
      } else {
        const response = await createProperty(formData);
        setFeedbackMessage(response.message || 'Property added successfully');
      }
      setFormData({ title: '', description: '', price: '', location: '' });
      setEditMode(false);
      setCurrentId(null);
      loadProperties();
    } catch (error) {
      setFeedbackMessage('An error occurred');
    }
  };

  const handleEdit = (property) => {
    setFormData(property);
    setEditMode(true);
    setCurrentId(property._id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteProperty(id);
      setFeedbackMessage(response.message || 'Property deleted successfully');
      setProperties(properties.filter(property => property._id !== id));
    } catch (error) {
      setFeedbackMessage('An error occurred');
    }
  };

  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

      {feedbackMessage && <Typography color="secondary">{feedbackMessage}</Typography>}

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          {editMode ? 'Update Property' : 'Add Property'}
        </Button>
      </form>

      <List>
        {properties.map(property => (
          <ListItem key={property._id} style={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText
              primary={property.title}
              secondary={`Location: ${property.location} | Price: $${property.price}`}
            />
            <Button onClick={() => handleEdit(property)} color="primary">Edit</Button>
            <Button onClick={() => handleDelete(property._id)} color="secondary">Delete</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default AdminDashboard;