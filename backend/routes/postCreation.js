const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Post = require("../models/postModel"); // ✅ paste this here
const { protect } = require("../middleware/authMiddleware");

// User creates a post
router.post("/create", protect, async (req, res) => {
  try {
    const post = await Post.create({
      user: req.user._id,
      content: req.body.content,
    });

    const user = await User.findById(req.user._id);
    user.contributions.posts += 1;
    user.reputation += 10;

    // Award badges dynamically
    if (user.contributions.posts === 5) {
      user.badges.push({
        name: "Rising Contributor",
        description: "Created 5 posts!",
      });
    }

    await user.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
