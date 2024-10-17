const express = require("express");
require("dotenv").config()
const comicModel = require("./models/ComicBooks");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 


app.get("/", (req, res) => {
  res.send("Home page");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});