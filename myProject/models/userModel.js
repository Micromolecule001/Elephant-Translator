const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Login: String,
  Email: String,
  Password: String,
  Role: String,
  ResponseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Response' },
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
