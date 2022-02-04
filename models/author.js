const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      data: Buffer,
      contentType: String
    }
  }
);

module.exports = mongoose.model('Author', authorSchema);