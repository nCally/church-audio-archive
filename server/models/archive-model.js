
const mongoose = require('mongoose');

const Archive = new mongoose.Schema({
  title: String,
  minister: String,
  link: String,
  fileId: String,
  size: String,
  day: Number,
  month: Number,
  year: Number
})

module.exports = mongoose.model('Archive', Archive);