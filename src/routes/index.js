const express = require("express");
const router = express.Router();

// client
const bookRoutes = require("../client/book/bookRoutes");
const guruRoutes = require("../client/guru/guruRoutes");

router.use("/api/books", bookRoutes);
router.use("/api/guru", guruRoutes);

// cms
const cmsGuruRoutes = require("../cms/book/cmsGuruRoutes");

router.use("/api/cms/guru", cmsGuruRoutes);

module.exports = router;
