const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    },
    user_left: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    user_taken: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    method: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      required: true
    },
    reviewed: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);