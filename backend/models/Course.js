const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    description: { type: String, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    enrolledUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    startDate: Date,
    endDate: Date,
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner', index: true },
    category: { String, index: true },
    // Additional fields as needed
});

courseSchema.index({ title: 1, instructor: 1, level: 1, category: 1 });
module.exports = mongoose.model('Course', courseSchema);
