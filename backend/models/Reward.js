const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  title: String,
  description: String,
  pointsRequired: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Reward', rewardSchema);
