// models/testingResult.schema.js
import mongoose from 'mongoose';

const testingResultSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    test_name: { type: String, required: true },
    parameter: { type: String },
    url: {
        html_file: { type: String },
        pdf_file: { type: String },
        json_file: { type: String }
    }
});

const TestingResult = mongoose.model("Company", testingResultSchema);

export default TestingResult;

