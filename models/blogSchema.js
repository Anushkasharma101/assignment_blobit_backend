const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogDetailSchema = new Schema({
  class: {
    type: String,
    required: true
  },
  value: {
    type: Schema.Types.Mixed, // Mixed type to handle text or objects (for images)
    required: true
  }
});

const blogSchema = new Schema({
  Heading: {
    type: String,
    required: true
  },
  coverImg: {
    type: String,
    required: true
  },
  blogDetail: {
    type: [blogDetailSchema],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
