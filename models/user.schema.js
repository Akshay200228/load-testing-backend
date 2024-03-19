// models/user.schema.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
    is_verified: { type: Boolean, default: false },
    user_type: { type: String, enum: ['company', 'individual'], required: true },
    role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
});

const User = mongoose.model("User", userSchema);

export default User;