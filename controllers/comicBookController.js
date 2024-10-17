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
    // These params would be passed by axios -> options field by frontend
    const { page = 1, limit = 10, authorName, yearOfPublication, price, condition, sortBy = 'bookName', order = 'asc' } = req.query;
    const pageLimit = parseInt(limit);
    const pageNumber = parseInt(page);
    
    const filter = {};
    if(authorName) filter.authorName = authorName;
    if(yearOfPublication) filter.yearOfPublication = yearOfPublication;
    if(price) filter.price = price;
    if(condition) filter.condition = condition;

    const comicBooks = await comicModel.find(filter)
        .sort({[sortBy]: order === 'asc' ? 1 : -1})
        .limit(pageLimit)
        .skip((pageNumber - 1) * pageLimit)
    
    return res.status(200).json(comicBooks);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

// Controller to update comic book
async function updateComicBook(req, res){
  try {
    const comicBook = await comicModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!comicBook){
      return res.status(404).json({message: "Comic book not found"})
    }
    return res.status(200).json(comicBook);
  }
  catch (error) {
    return res.status(500).json({message: error.message})
  }
}

// Controller to delete comic book
async function deleteComicBook(req, res){
  try {
    const comicBook = await comicModel.findByIdAndDelete(req.params.id);
    if(!comicBook){
      return res.status(404).json({message: "Comic book not found"})
    }
    return res.status(200).json({message: "Comic book deleted"});
  }
  catch (error) {
    return res.status(500).json({message: error.message})
  }
}


// Export all the controller methods as part of an object
module.exports = {createComicBook, getComicBooks, updateComicBook, deleteComicBook} // CommonJS method to export