const express = require("express");
const {createComicBook, getComicBooks} = require("../controllers/comicBookController");
const router = express.Router();

// Prefixed by route mentioned in app.use()
router.post("/", createComicBook);

router.get("/", getComicBooks);


module.exports = router;