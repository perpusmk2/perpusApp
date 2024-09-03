const express = require("express");
const router = express.Router();

const cmsBookControllers = require("./cmsBookControllers");

router.get("/", cmsBookControllers.getAllBooks);
router.get("/:id", cmsBookControllers.getBook);

module.exports = router;
