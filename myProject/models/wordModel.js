const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  WordValue: String,
  DictID: { type: mongoose.Schema.Types.ObjectId, ref: 'Dictionary' },
  WordLanguage: String,
  // Add other fields as needed
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
