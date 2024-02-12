const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StationEnum = ['TAPI', 'STORAGE', 'PRODUCTION', 'PACKING', 'QC', 'FINISHED'];

const transferSchema = new Schema({

    // both
    reportCatalogNum: { type: Number, required: true },

    // sender
    sendWorker: { type: Schema.Types.ObjectId, ref: 'Worker', required: true  },
    sendDate: {type: Date, required: true },
    sendStation: { type: String, enum: StationEnum, required: true },

    // reciver
    reciveWorker: { type: Schema.Types.ObjectId, ref: 'Worker', required: true  },
    reciveDate: {type: Date, required: true },
    currentStation: { type: String, enum: StationEnum, required: true },
    reciveStation: { type: String, enum: StationEnum, required: true },
},{
    versionKey: false
});

module.exports = mongoose.model('Transfer', transferSchema);
