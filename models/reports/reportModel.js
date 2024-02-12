const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StationEnum = ['TAPI', 'STORAGE', 'PRODUCTION', 'PACKING', 'QC', 'FINISHED'];
const ActivitiesEnum = ['OPTICA', 'PRINT', 'ARMY', 'PRIVAYECUSTOMER', 'CHECKING'];

const reportSchema = new Schema({
  reportCatalogNum: { type: Number, required: true },
  title: { type: String, required: true },
  reportDescription: { type: String, required: true },
  currentStation: { type: String, enum: StationEnum, required: true },
  activity: { type: String, enum: ActivitiesEnum },
  openDate: { type: Date, required: true },
  closeDate: { type: Date, },
  transferBetweenStations: [{ type: Schema.Types.ObjectId, ref: 'Transfer' }], // Referencing Worker schema
  workersList: [{ type: Schema.Types.ObjectId, ref: 'Worker' }], // Referencing Worker schema
  procutList: [{ type: Schema.Types.ObjectId, ref: 'Product' }], // Referencing Product schema
  },{
    versionKey: false
  });

module.exports = mongoose.model('Report', reportSchema);