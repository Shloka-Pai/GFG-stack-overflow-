const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database");
const postRoutes = require("./routes/postCreation");


dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("This is the Stack Overflow Clone API 🚀");
});

app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

// Connect DB and start server
connectDB();
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
