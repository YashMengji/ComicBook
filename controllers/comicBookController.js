const comicModel = require("../models/ComicBooks");

// Controller to create comic book
async function createComicBook(req, res){
  try {
    const comicBook = await comicModel.create(req.body);
    return res.status(201).json(comicBook);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

// Controller to get all comic books
async function getComicBooks(req, res){
  try {
    const comicBooks = await comicModel.find();
    return res.status(200).json(comicBooks);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}


// Export all the controller methods as part of an object
module.exports = {createComicBook, getComicBooks} // CommonJS method to export