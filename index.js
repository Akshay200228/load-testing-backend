// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectToMongoDB from './database/database.js'
import { login, register } from './controllers/authController.js';
import { getUsers } from './controllers/userController.js';
import { getRoles } from './controllers/roleController.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectToMongoDB();

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
        <h1>Welcome to Load Testing Server</h1>
      </div>
    `);
});


// Authentication routes
app.post('/api/login', login);
app.post('/api/register', register);

// Users routes
app.get('/api/users', getUsers);

// Roles routes
app.get('/api/roles', getRoles);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});