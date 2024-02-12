const mongoose = require('mongoose');

const StationEnum = ['TAPI', 'STORAGE', 'PRODUCTION', 'PACKING', 'QC', 'FINISHED'];
const ActivitiesEnum = ['OPTICA', 'PRINT', 'ARMY', 'PRIVAYECUSTOMER', 'CHECKING'];

const reportSchema = new mongoose.Schema({
  // id
  catalogNum: { type: Number, reuired:true },
  count: { type:Number },
  openDate: { type: Date, reuired:true },
  closeDate: { type: Date },
  workersList: [ WorkerScheme ], // Reference to Worker schema
  currentStation: { type: String, enum: StationEnum, required:true }, // Enum field for station
  activity: { type: String, enum: ActivitiesEnum },
  partsList: { type: [partSchema], required:true }, // Array of partSchema
});


module.exports = mongoose.model('Report', reportSchema);
