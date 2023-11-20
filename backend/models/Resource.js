const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    type: { type: String, enum: ['article', 'video', 'tutorial', 'ebook', 'other'], default: 'article' },
    link: String,
    description: String,
    author: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    workshop: { type: mongoose.Schema.Types.ObjectId, ref: 'Workshop' },
    // Additional fields as needed
});

resourceSchema.index({ title: 1 });
module.exports = mongoose.model('Resource', resourceSchema);
