const mongoose = require('mongoose');

const reflectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quest' },
  type: { type: String, enum: ['text', 'image', 'audio'], required: true },
  content: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reflection', reflectionSchema);