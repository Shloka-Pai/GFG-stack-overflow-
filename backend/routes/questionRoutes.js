const express = require("express");
const {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("../controller/questionController");

const router = express.Router();

router.route("/")
  .get(getQuestions)
  .post(createQuestion);

router.route("/:id")
  .get(getQuestionById)
  .put(updateQuestion)
  .delete(deleteQuestion);

module.exports = router;
