// userController.js
import User from '../models/user.schema.js';

// Get all users controller
export async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
