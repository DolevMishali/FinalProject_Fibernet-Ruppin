const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  // id
  catalogNum: { type: Number, required:true },
  count: { type: Number, required:true },
});

module.exports = mongoose.model('Part', partSchema);
