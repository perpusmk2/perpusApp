const express = require("express");
const router = express.Router();

const guruControllers = require("./cmsGuruControllers");

router.get("/", guruControllers.getAllGuru);
router.get("/:id", guruControllers.getGuru);
router.post("/", guruControllers.createGuru);
router.put("/:id", guruControllers.updateGuru);

module.exports = router;
