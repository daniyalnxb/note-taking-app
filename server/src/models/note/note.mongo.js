const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    noteNumber: {
        type: Number,
    },
    title: { 
        type: String,
        required: true 
    },
    content: { 
        type: String, 
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    isArchived: { type: Boolean, default: false },
});

// Remove _id and __v from responses
noteSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Planet', noteSchema);
