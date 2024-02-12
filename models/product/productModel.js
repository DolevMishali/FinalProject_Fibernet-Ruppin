const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productCatalogNum: { type: Number, required: true },
  amount: { type: Number, required: true },
  partsList: [{ type: Schema.Types.ObjectId, ref: 'Part' }], // Referencing Part schema
});

module.exports = mongoose.model('Product', productSchema);