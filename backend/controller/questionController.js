const Question = require("../models/questionModel");

exports.createQuestion = async (req, res) => {
  try {
    const { title, body, user, category, tags } = req.body;

    const newQuestion = await Question.create({
      title,
      body,
      user,
      category,
      tags,
    });

    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: "Error creating question", error: error.message });
  }
};