const mongoose = require('mongoose');

const StationEnum = ['Station1', 'Station2', 'Station3', 'Station4', 'Station5'];


const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  openDate: { type: Date },
  closeDate: { type: Date },
  products: [productSchema], // Array of productSchema
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' }, // Reference to Worker schema
  station: { type: String, enum: StationEnum }, // Enum field for station
  status: {type: boolean},
});

module.exports = mongoose.model('Report', reportSchema);
