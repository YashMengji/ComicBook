const express = require("express"); // Import the express module
const {createComicBook, getComicBooks, updateComicBook, deleteComicBook, getComicBookDetails} = require("../controllers/comicBookController"); // Import controller functions
const router = express.Router(); // Create a new router object

// Prefixed by route mentioned in app.use()
router.post("/", createComicBook); // Route to create a new comic book
router.get("/", getComicBooks); // Route to get all comic books
router.put("/:id", updateComicBook); // Route to update a comic book by ID
router.delete("/:id", deleteComicBook); // Route to delete a comic book by ID

router.get("/:id", getComicBookDetails); // Route to get details of a comic book by ID

module.exports = router; // Export the router object