const comicModel = require("../models/ComicBooks");

async function createComicBook(req, res){
  try {
    const comicBook = await comicModel.create(req.body);
    return res.status(201).json(comicBook);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

module.exports = createComicBook