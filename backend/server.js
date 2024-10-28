const express = require('express');
const cors = require('cors');  // Import CORS
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());  // Enable CORS
connectDB();

app.use(express.json());
app.use('/api/properties', require('./routes/propertyRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));