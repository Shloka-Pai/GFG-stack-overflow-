const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database");

//importing rroutes
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const tagRoutes = require("./routes/tagRoutes");
const questionRoutes = require("./routes/questionRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use the routes
app.use("/api/user", userRoutes);       //
app.use("/api/categories", categoryRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/questions", questionRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("This is the Stack Overflow Clone API 🚀");
});

// Import your routes (later)

// const userRoutes = require("./routes/userRoutes");
// const questionRoutes = require("./routes/questionRoutes");
// app.use("/user", userRoutes);
// app.use("/questions", questionRoutes);

const PORT = process.env.PORT || 5000;

// Connect DB and start server
connectDB();
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
