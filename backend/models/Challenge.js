
const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  reward: Number,
  type: String
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
