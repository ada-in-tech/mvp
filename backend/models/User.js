const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['newcomer', 'professional', 'admin', 'company', 'community'], required: true, index: true },
    bio: String,
    skills: [String],
    interests: [String],
    linkedIn: String,
    github: String,
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    enrolledWorkshops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workshop' }],
    // Add other fields as needed
});

userSchema.index({ name: 1, email: 1, role: 1 });
module.exports = mongoose.model('User', userSchema);
