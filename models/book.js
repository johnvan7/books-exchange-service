const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      required: true
    },
    release_date: {
      type: Date,
      required: false
    },
    pages: {
      type: Number,
      required: false
    },
    category_id: {
      type: Number,
      required: true,
    },
    images: [
      {
        index: Number,
        data: Buffer,
        contentType: String
      }
    ],
    authors: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Author'
      }
    ],
    tags: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);