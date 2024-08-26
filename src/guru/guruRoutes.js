const express = require("express");
const router = express.Router();
const guruControllers = require("./guruControllers");

router.get("/guru", guruControllers.getAllGuru);

module.exports = router;
