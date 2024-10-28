// backend/controllers/propertyController.js
const Property = require('../models/Property');

// CREATE - Add a new property
exports.createProperty = async (req, res) => {
  try {
    const { title, description, price, location } = req.body;
    if (!title || !description || !price || !location) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newProperty = new Property(req.body);
    const savedProperty = await newProperty.save();
    res.status(201).json({ message: 'Property added successfully', property: savedProperty });
  } catch (error) {
    res.status(500).json({ error: 'Error creating property', details: error.message });
  }
};

// READ - Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching properties', details: error.message });
  }
};

// READ - Get a single property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching property', details: error.message });
  }
};

// UPDATE - Update a property by ID
exports.updateProperty = async (req, res) => {
  try {
    const { title, description, price, location } = req.body;
    if (!title || !description || !price || !location) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json({ message: 'Property updated successfully', property: updatedProperty });
  } catch (error) {
    res.status(500).json({ error: 'Error updating property', details: error.message });
  }
};

// DELETE - Delete a property by ID
exports.deleteProperty = async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deletedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting property', details: error.message });
  }
};