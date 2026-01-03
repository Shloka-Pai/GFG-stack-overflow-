const Tag = require("../models/tagModel");

// 1. Create a new Tag
exports.createTag = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if tag exists
    const existingTag = await Tag.findOne({ name });
    if (existingTag) {
      return res.status(400).json({ message: "Tag already exists" });
    }

    const newTag = await Tag.create({ name, description });
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 2. Get all Tags
exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};