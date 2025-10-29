const express = require("express");
const router = express.Router();
const { signupUser, getUserProfile } = require("../controller/userController");

// Signup route
router.post("/signup", signupUser);

// Get user profile by ID (new)
router.get("/:id", getUserProfile);

module.exports = router;
