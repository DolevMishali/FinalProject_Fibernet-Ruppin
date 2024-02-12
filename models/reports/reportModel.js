const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StationEnum = ['TAPI', 'STORAGE', 'PRODUCTION', 'PACKING', 'QC', 'FINISHED'];
const ActivitiesEnum = ['OPTICA', 'PRINT', 'ARMY', 'PRIVAYECUSTOMER', 'CHECKING'];

const reportSchema = new Schema({
  reportCatalogNum: { type: Number, required: true },
  openDate: { type: Date, required: true },
  closeDate: { type: Date },
  workersList: [{ type: Schema.Types.ObjectId, ref: 'Worker' }], // Referencing Worker schema
  currentStation: { type: String, enum: StationEnum, required: true },
  activity: { type: String, enum: ActivitiesEnum },
});

module.exports = mongoose.model('Report', reportSchema);