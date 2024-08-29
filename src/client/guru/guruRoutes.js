const express = require("express");
const router = express.Router();
const guruControllers = require("./guruControllers");

router.get("/", guruControllers.getAllGuru);
router.get("/:id", guruControllers.getGuru);

module.exports = router;
