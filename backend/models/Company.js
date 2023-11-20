const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    description: String,
    location: String,
    industry: { type: String, index: true },
    website: String,
    jobListings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobListing' }],
    // Additional fields as needed
});

companySchema.index({ name: 1, industry: 1 });
module.exports = mongoose.model('Company', companySchema);
