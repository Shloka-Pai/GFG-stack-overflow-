const express = require("express");
const router = express.Router();
const { createQuestion } = require("../controller/questionController");

router.post("/", createQuestion);

module.exports = router;