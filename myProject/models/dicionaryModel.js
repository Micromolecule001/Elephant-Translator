const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  DictLanguage: String,
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
