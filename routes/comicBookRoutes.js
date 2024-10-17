const express = require("express");
const createComicBook = require("../controllers/comicBookController");

const router = express.router();

// Prefixed by route mentioned in app.use()
router.post("/", createComicBook)


module.exports = router