const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  // id
  name: {type: String, required:true },
  workerNum: { type: Number , required:true },
});

module.exports = mongoose.model('Worker', workerSchema);