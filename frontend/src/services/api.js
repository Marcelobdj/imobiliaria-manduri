// src/services/api.js
const API_URL = 'http://manduri-mongo:5000/api/properties';

// Helper function to get authorization headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
};

// Fetch all properties
export const fetchProperties = async () => {
  const response = await fetch(API_URL, {
    headers: getAuthHeaders(),
  });
  return await response.json();
};

// Fetch a single property by ID
export const fetchPropertyById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    headers: getAuthHeaders(),
  });
  return await response.json();
};

// Create a new property
export const createProperty = async (propertyData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(propertyData),
  });
  return await response.json();
};

// Update a property
export const updateProperty = async (id, propertyData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(propertyData),
  });
  return await response.json();
};

// Delete a property
export const deleteProperty = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  return await response.json();
};