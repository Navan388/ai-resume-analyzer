require('dotenv').config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const resumeRoutes = require("./routes/resumeRoutes");
const authRoutes = require("./routes/authRoutes"); // 🔥 NEW

const app = express();

// ✅ Connect DB
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);     // 🔥 NEW (IMPORTANT)
app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});