const mongoose = require('mongoose');

const StationEnum = ['Station1', 'Station2', 'Station3', 'Station4', 'Station5'];

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Report', reportSchema);
