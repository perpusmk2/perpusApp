const express = require("express");
const router = express.Router();

// client
const bookRoutes = require("../client/book/bookRoutes");
const guruRoutes = require("../client/guru/guruRoutes");

router.use("/api/books", bookRoutes);
router.use("/api/guru", guruRoutes);

// cms
const cmsGuruRoutes = require("../cms/guru/cmsGuruRoutes");
const cmsBookRoutes = require("../cms/book/cmsBookRoutes");

router.use("/api/cms/guru", cmsGuruRoutes);
router.use("/api/cms/book", cmsBookRoutes);

module.exports = router;
