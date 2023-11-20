const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    description: { type: String, required: true },
    presenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    date: Date,
    location: String,
    // Additional fields as needed
});

workshopSchema.index({ title: 1, presenter: 1 });
module.exports = mongoose.model('Workshop', workshopSchema);
