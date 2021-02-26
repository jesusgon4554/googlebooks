const router = require("express").Router();
const booksRoutes = require("./books");

// here are bookRoutes
router.use("/books", booksRoutes);

module.exports = router;