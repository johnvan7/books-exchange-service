const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      required: true,
      default: 1
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    image: {
      data: Buffer,
      contentType: String
    },
    library: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book'
      }
    ],
    position: {
      state: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      number: {
        type: Number,
        required: true
      },
    },
    saved: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book'
      }
    ],
    reviews: [
      {
        comment: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          required: false,
          default: Date.now()
        },
        order: {
          type: Schema.Types.ObjectId,
          ref: 'Order'
        },
        stars: {
          type: Number,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);