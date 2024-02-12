const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  // id
  name: {type: Number, reuired:true },
  workerNum: { type: Number , reuired:true },
});

module.exports = mongoose.model('Worker', workerSchema);
