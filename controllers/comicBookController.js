const comicModel = require("../models/ComicBooks"); // Import the ComicBooks model

// Controller to create comic book
async function createComicBook(req, res){
  try {
    const comicBook = await comicModel.create(req.body); // Create a new comic book with the request body data
    return res.status(201).json(comicBook); // Respond with the created comic book and status 201
  } catch (error) {
    return res.status(500).json({message: error.message}); // Handle errors and respond with status 500
  }
}

// Controller to get all comic books
async function getComicBooks(req, res){
  try {
    const { page = 1, limit = 10, authorName, yearOfPublication, price, condition, sortBy = 'bookName', order = 'asc' } = req.query; // Extract query parameters with default values
    const pageLimit = parseInt(limit); // Convert limit to integer
    const pageNumber = parseInt(page); // Convert page to integer

    const filter = {}; // Build filter object based on query parameters
    if(authorName) filter.authorName = authorName;
    if(yearOfPublication) filter.yearOfPublication = yearOfPublication;
    if(price) filter.price = price;
    if(condition) filter.condition = condition;

    const comicBooks = await comicModel.find(filter) // Find comic books with filter, sort, limit, and pagination
        .sort({[sortBy]: order === 'asc' ? 1 : -1})
        .limit(pageLimit)
        .skip((pageNumber - 1) * pageLimit);
    
    return res.status(200).json(comicBooks); // Respond with the found comic books and status 200
  } catch (error) {
    return res.status(500).json({message: error.message}); // Handle errors and respond with status 500
  }
}

// Controller to update comic book
async function updateComicBook(req, res){
  try {
    const comicBook = await comicModel.findByIdAndUpdate(req.params.id, req.body, {new: true}); // Find comic book by ID and update with request body data, return the new document
    if(!comicBook){
      return res.status(404).json({message: "Comic book not found"}); // Respond with status 404 if comic book not found
    }
    return res.status(200).json(comicBook); // Respond with the updated comic book and status 200
  }
  catch (error) {
    return res.status(500).json({message: error.message}); // Handle errors and respond with status 500
  }
}

// Controller to delete comic book
async function deleteComicBook(req, res){
  try {
    const comicBook = await comicModel.findByIdAndDelete(req.params.id); // Find comic book by ID and delete it
    if(!comicBook){
      return res.status(404).json({message: "Comic book not found"}); // Respond with status 404 if comic book not found
    }
    return res.status(200).json({message: "Comic book deleted"}); // Respond with success message and status 200
  }
  catch (error) {
    return res.status(500).json({message: error.message}); // Handle errors and respond with status 500
  }
}

// Controller to get comic book details
async function getComicBookDetails(req, res){
  try {
    const comicBook = await comicModel.findById(req.params.id); // Find comic book by ID
    if(!comicBook){
      return res.status(404).json({message: "Comic book not found"}); // Respond with status 404 if comic book not found
    }
    return res.status(200).json(comicBook); // Respond with the found comic book and status 200
  }
  catch (error) {
    return res.status(500).json({message: error.message}); // Handle errors and respond with status 500
  }
}

// Export all the controller methods as part of an object
module.exports = {createComicBook, getComicBooks, updateComicBook, deleteComicBook, getComicBookDetails}; // CommonJS method to export
