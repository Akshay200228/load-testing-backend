// models/role.schema.js
import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    role_name: { type: String, required: true },
    permissions: [{ type: String }] // Permissions for the role
});

const Role = mongoose.model("Role", roleSchema);

export default Role;
