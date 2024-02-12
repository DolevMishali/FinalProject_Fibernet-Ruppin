const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  // id
  name: {type: String, required:true },
  workerNum: { type: Number , required:true },
  // Add report list - to know about how much "PAKAOT" each worker work on.
});

module.exports = mongoose.model('Worker', workerSchema);