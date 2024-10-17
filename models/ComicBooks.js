const mongoose = require('mongoose'); // Import mongoose library

// Define the schema for a comic book
const comicBookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true, // Book name is required
    trim: true // Trim whitespace from the book name
  },
  authorName: {
    type: String,
    required: true, // Author name is required
    trim: true // Trim whitespace from the author name
  },
  yearOfPublication: {
    type: Number,
    required: true // Year of publication is required
  },
  price: {
    type: Number,
    required: true // Price is required
  },
  discount: {
    type: Number,
    default: 0 // Default discount is 0
  },
  numberOfPages: {
    type: Number,
    required: true // Number of pages is required
  },
  condition: {
    type: String,
    enum: ['new', 'used'], // Condition must be either 'new' or 'used'
    required: true // Condition is required
  },
  description: {
    type: String,
    default: '' // Default description is an empty string
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the ComicBook model using the schema
const ComicBook = mongoose.model('ComicBook', comicBookSchema);

// Export the ComicBook model
module.exports = ComicBook;
