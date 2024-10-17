const mongoose = require('mongoose');

const comicBookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    trim: true
  },
  authorName: {
    type: String,
    required: true,
    trim: true
  },
  yearOfPublication: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  numberOfPages: {
    type: Number,
    required: true
  },
  condition: {
    type: String,
    enum: ['new', 'used'],
    required: true
  },
  description: {
    type: String,
    default: ''
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const ComicBook = mongoose.model('ComicBook', comicBookSchema);

module.exports = ComicBook;
