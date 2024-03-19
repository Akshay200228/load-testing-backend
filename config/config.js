// config.js
import dotenv from 'dotenv';

dotenv.config();

export default {
    jwtSecret: process.env.JWT_SECRET || 'yourjwtsecret',
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/load_testing_db'
};
