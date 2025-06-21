const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  prompt: String,
  type: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'daily' },
  createdAt: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Quest', questSchema);
