// src/services/api.js
const API_URL = 'http://localhost:5000/api/properties';

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
  try {
    const response = await fetch(API_URL, {
      headers: getAuthHeaders(),
    });

    // Check content type before parsing
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("Parsed JSON data:", data); // Log JSON data
      return data;
    } else {
      // Log raw response if not JSON
      const textResponse = await response.text();
      console.log("Non-JSON response:", textResponse);
      throw new Error("Expected JSON but received non-JSON response.");
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
    return []; // Return an empty array or a default fallback value
  }
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