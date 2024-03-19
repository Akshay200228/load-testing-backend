// roleController.js

import Role from "../models/role.schema.js";

// Get all roles controller
export async function getRoles(req, res) {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
