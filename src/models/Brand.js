const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden');

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    uppercase: true,
  },
});

// Duplicate the ID field.
BrandSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
BrandSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Brand', BrandSchema);
