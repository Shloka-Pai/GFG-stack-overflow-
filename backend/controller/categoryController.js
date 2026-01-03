const Category = require("../models/categoryModel");

// 1. Create a new Category
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if it already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = await Category.create({ name, description });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 2. Get all Categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};