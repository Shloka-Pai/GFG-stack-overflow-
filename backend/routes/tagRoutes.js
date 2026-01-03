const express = require("express");
const router = express.Router();
const { createTag, getAllTags } = require("../controller/tagController");

router.post("/", createTag); // POST /api/tags
router.get("/", getAllTags); // GET /api/tags

module.exports = router;