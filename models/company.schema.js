// models/company.mjs
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    company_name: { type: String, required: true },
    company_details: { type: String },
    number_of_users: { type: Number, default: 0 }
});


const Company = mongoose.model("Company", companySchema);

export default Company;
