const express = require("express");
const {createComicBook, getComicBooks, updateComicBook, deleteComicBook} = require("../controllers/comicBookController");
const router = express.Router();

// Prefixed by route mentioned in app.use()
router.post("/", createComicBook);
router.get("/", getComicBooks);
router.put("/:id", updateComicBook);
router.delete("/:id", deleteComicBook);

module.exports = router;