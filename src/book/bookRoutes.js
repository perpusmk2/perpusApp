const express = require("express");
const router = express.Router();
const bookControllers = require("./bookControllers");

router.get("/books", bookControllers.getAllBooks);

module.exports = router;
