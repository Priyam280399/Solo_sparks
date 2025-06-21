const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  mood: String,
  personality: Object,
  points: {
  type: Number,
  default: 0,
  required: true
},
});

module.exports = mongoose.model('User', userSchema);
