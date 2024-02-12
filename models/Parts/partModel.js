const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  // id
  partCatalogNum: { type: Number, required:true },
  name: { type: String, required:true },
  amount: { type: Number, required:true },
});

module.exports = mongoose.model('Part', partSchema);