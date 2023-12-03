const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  DictId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dictionary' },
  WordId: { type: mongoose.Schema.Types.ObjectId, ref: 'Word' },
  WordReq: String,
  WordRes: String,
  Date: { type: Date, default: Date.now },
  WordLanguage: String,
  // Add other fields as needed
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
