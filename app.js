const express = require("express");
require("dotenv").config()
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const comicBookRoutes = require("./routes/comicBookRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// "/api/comics" is added as prefix to all routes in comicBookRoutes
app.use("/api/comics", comicBookRoutes) // "/comics" after "/api" indicates all comics routes are grouped together

// Error handling middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});