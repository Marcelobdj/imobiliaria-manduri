
# Imobiliária Manduri Real Estate Website

This project is a complete website developed for Imobiliária Manduri, a real estate company, providing an interface for property listings and an admin panel for property management. 
The frontend is built with React.js, while the backend is powered by Node.js and Express, with MongoDB as the database.

## Project Structure

The project is divided into two main parts:

- **Frontend**: Located in the `frontend` directory
- **Backend**: Located in the `backend` directory

## Technologies Used

### Frontend

- **React.js**: Frontend library used for building the user interface.
- **CSS**: Stylesheets used for layout and styling.
- **Custom Components**: Reusable components such as `FlatItem`, `Header`, `Footer`, etc., enhance the modular structure.
- **Pages**: Major pages include `Home`, `Login`, `Properties`, and `AdminDashboard`.
- **API Communication**: Handled via `api.js` to interface with backend services.
- **Testing**: Jest testing setup with example tests provided.
- **PWA Support**: Basic PWA setup files (`manifest.json`, `index.html`) included.

### Backend

- **Node.js**: Runtime environment for backend development.
- **Express.js**: Web framework used for building the backend server and APIs.
- **MongoDB**: NoSQL database used for storing property and user data.
- **JWT Authentication**: JSON Web Tokens for secure access, especially for admin-only features.
- **Mongoose Models**: Models for User and Property data structures.
- **Controllers**: Controllers for managing authentication and property data.
- **Middleware**: Authentication middleware to protect admin routes.
- **Routing**: Modularized routes for properties and authentication.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/imobiliaria-manduri.git
   ```

2. **Frontend Setup**

   - Navigate to the frontend folder and install dependencies:

     ```bash
     cd frontend
     npm install
     ```

   - Start the frontend server:

     ```bash
     npm start
     ```

3. **Backend Setup**

   - Navigate to the backend folder and install dependencies:

     ```bash
     cd backend
     npm install
     ```

   - Set up environment variables in a `.env` file (Refer to the `.env.example` if available) and connect to MongoDB.

   - Start the backend server:

     ```bash
     npm start
     ```

4. **Environment Variables**:

   Backend requires environment variables for database connection and JWT setup. These should be defined in a `.env` file.

## Features

- **Frontend**:
  - Property listing page
  - Authentication for admin
  - Admin Dashboard for managing properties (CRUD operations)
  
- **Backend**:
  - Secure API endpoints with JWT-based authentication
  - MongoDB for data persistence
  - Middleware-protected routes for admin operations

## Scripts

- **Frontend**:
  - `npm start`: Starts the development server
  - `npm test`: Runs tests

- **Backend**:
  - `npm start`: Starts the backend server

## Folder Structure

```
imobiliaria-manduri/
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.js
└── backend/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

## License

This project is licensed under the MIT License.
