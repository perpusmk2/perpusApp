const express = require("express");
const router = require("express").Router();

const bookRoutes = require("../book/bookRoutes");
const guruRoutes = require("../guru/guruRoutes");

router.use("/api", bookRoutes);
router.use("/api", guruRoutes);

module.exports = router;
