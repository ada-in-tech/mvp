const mongoose = require('mongoose');

const communityGroupSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    description: String,
    focusArea: String,
    website: String,
    location: String,
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    // Additional fields as needed
});

communityGroupSchema.index({ name: 1 });
module.exports = mongoose.model('CommunityGroup', communityGroupSchema);
