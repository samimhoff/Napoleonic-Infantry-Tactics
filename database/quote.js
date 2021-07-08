const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  fullName: String,
  quote: String,
  date: String,
  rank: String,
  source: String
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;