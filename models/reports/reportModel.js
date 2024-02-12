const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: Boolean, required: true }
}, {
  versionKey: false  // Disables the __v field
});


module.exports = mongoose.model('Report', reportSchema);
