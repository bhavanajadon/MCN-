
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  coins: { type: Number, default: 0 },
  level: { type: Number, default: 1 }
});

module.exports = mongoose.model('User', UserSchema);
